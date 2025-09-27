import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../config/firebase';
import { ref, set, remove, get } from 'firebase/database';
import type { Teacher } from '../../types/teachers';
import toast from 'react-hot-toast';

export const addFavoriteTeacher = createAsyncThunk(
  'favorites/addFavoriteTeacher',
  async ({ userId, teacher }: { userId: string; teacher: Teacher }, { rejectWithValue }) => {
    try {
      await set(ref(database, `users/${userId}/favorites/${teacher.id}`), teacher);
      return teacher;
    } catch (error) {
      toast.error('Failed to add teacher to favorites.');
      return rejectWithValue(error);
    }
  }
);

export const removeFavoriteTeacher = createAsyncThunk(
  'favorites/removeFavoriteTeacher',
  async ({ userId, teacherId }: { userId: string; teacherId: string }, { rejectWithValue }) => {
    try {
      await remove(ref(database, `users/${userId}/favorites/${teacherId}`));
      return teacherId;
    } catch (error) {
      toast.error('Failed to remove teacher to favorites.');
      return rejectWithValue(error);
    }
  }
);

export const fetchFavoriteTeachers = createAsyncThunk(
  'favorites/fetchFavoriteTeachers',
  async (userId: string, { rejectWithValue }) => {
    try {
      const snapshot = await get(ref(database, `users/${userId}/favorites`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.values(data) as Teacher[];
      }
      return [];
    } catch (error) {
      toast.error('Failed to fetch favorite teachers.');
      return rejectWithValue(error);
    }
  }
);
