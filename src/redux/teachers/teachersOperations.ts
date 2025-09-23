import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ref,
  get,
  DataSnapshot,
  query,
  orderByKey,
  limitToFirst,
  startAfter,
} from 'firebase/database';
import { database } from '../../config/firebase';
import type { Teacher } from '../../types/teachers';

interface FetchTeachersParams {
  limit?: number;
  startAfter?: string;
  reset?: boolean;
}

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (
    { limit = 4, startAfter: startAfterKey, reset = false }: FetchTeachersParams = {},
    ThunkAPI
  ) => {
    try {
      let teachersQuery;

      if (startAfterKey) {
        teachersQuery = query(
          ref(database, '/'),
          orderByKey(),
          startAfter(startAfterKey),
          limitToFirst(limit)
        );
      } else {
        teachersQuery = query(ref(database, '/'), orderByKey(), limitToFirst(limit));
      }

      const snapshot: DataSnapshot = await get(teachersQuery);

      if (snapshot.exists()) {
        const data = snapshot.val();

        const teachers: Teacher[] = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));

        const lastKey = Object.keys(data).pop() || null;

        return {
          teachers,
          lastKey,
          hasMore: teachers.length === limit,
          reset,
        };
      }

      return { teachers: [], lastKey: null, hasMore: false, reset };
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
