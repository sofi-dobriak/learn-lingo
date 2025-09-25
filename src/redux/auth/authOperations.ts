import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import type { RegisterData, LoginData, User } from '../../types/auth';
import toast from 'react-hot-toast';

const transformUser = (firebaseUser: FirebaseUser): User => ({
  uid: firebaseUser.uid,
  email: firebaseUser.email || '',
  displayName: firebaseUser.displayName || '',
  emailVerified: firebaseUser.emailVerified,
});

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password, displayName }: RegisterData, ThunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: displayName,
      });

      toast.success('Successfully registered');
      return transformUser(userCredential.user);
    } catch (error: unknown) {
      let errorMessage = 'Registration error';

      if (error instanceof Error && 'code' in error) {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('This email address is already in use.');
          errorMessage = 'This email address is already in use.';
        }
      }

      return ThunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginData, ThunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully logged in');
      return transformUser(userCredential.user);
    } catch (error: unknown) {
      const errorMessage = 'Login failed. Please check your credentials.';

      if (error instanceof Error && 'code' in error) {
        if (error instanceof Error && 'code' in error) {
          if (error.code === 'auth/invalid-credential') {
            toast.error(errorMessage);
          } else {
            toast.error(errorMessage);
          }
        }
      }

      return ThunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return ThunkAPI.rejectWithValue(error);
  }
});

export const checkAuthState = createAsyncThunk('auth/checkState', async () => {
  return new Promise<User | null>(resolve => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user ? transformUser(user) : null);
    });
  });
});
