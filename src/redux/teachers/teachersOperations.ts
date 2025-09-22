import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get, DataSnapshot } from 'firebase/database';
import { database } from '../../config/firebase';
import type { Teacher } from '../../types/teachers';

export const fetchTeachers = createAsyncThunk('/teaches/fetchTeachers', async (_, ThunkAPI) => {
  try {
    const teachersRef = ref(database, '/');
    const snapshot: DataSnapshot = await get(teachersRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      const teachers: Teacher[] = Object.keys(data).map(key => ({
        id: key,
        ...data[key],
      }));

      return teachers;
    } else {
      return [];
    }
  } catch (error) {
    return ThunkAPI.rejectWithValue(error);
  }
});
