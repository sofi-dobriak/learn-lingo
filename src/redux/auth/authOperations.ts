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

      return transformUser(userCredential.user);
    } catch (error: unknown) {
      let errorMessage = 'Registration error';

      if (error instanceof Error && 'code' in error) {
        if (error.code === 'auth/email-already-in-use') {
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
      return transformUser(userCredential.user);
    } catch (error: unknown) {
      let errorMessage = 'Login error';

      if (error instanceof Error && 'code' in error) {
        if (error.code === 'auth/user-not-found') {
          errorMessage = 'User not found';
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
