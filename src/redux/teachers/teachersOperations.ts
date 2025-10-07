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
    { limit = 40, startAfter: startAfterKey, reset = false }: FetchTeachersParams = {},
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

export const fetchAllLanguages = createAsyncThunk(
  'teachers/fetchAllLanguages',
  async (_, ThunkAPI) => {
    try {
      const snapshot: DataSnapshot = await get(ref(database, '/'));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const teachers: Teacher[] = Object.values(data);

        const allLanguages = teachers.flatMap(teacher => teacher.languages);
        const uniqueLanguages = [...new Set(allLanguages)];

        return uniqueLanguages.map(language => ({
          value: language,
          label: language,
        }));
      }

      return [];
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchAllLevels = createAsyncThunk('teachers/fetchAllLevels', async (_, ThunkAPI) => {
  try {
    const snapshot: DataSnapshot = await get(ref(database, '/'));

    if (snapshot.exists()) {
      const data = snapshot.val();
      const teachers: Teacher[] = Object.values(data);

      const allLevel = teachers.flatMap(teacher => teacher.levels);
      const uniqueLevels = [...new Set(allLevel)];

      return uniqueLevels.map(level => ({
        value: level,
        label: level,
      }));
    }

    return [];
  } catch (error) {
    return ThunkAPI.rejectWithValue(error);
  }
});

export const fetchAllPrices = createAsyncThunk('teachers/fetchAllPrices', async (_, ThunkAPI) => {
  try {
    const snapshot: DataSnapshot = await get(ref(database, '/'));

    if (snapshot.exists()) {
      const data = snapshot.val();
      const teachers: Teacher[] = Object.values(data);

      const allPrices = teachers.map(teacher => teacher.price_per_hour);
      const uniquePrices = [...new Set(allPrices)].toSorted((a, b) => a - b);

      return uniquePrices.map((price: number) => ({
        value: price,
        label: price,
      }));
    }

    return [];
  } catch (error) {
    return ThunkAPI.rejectWithValue(error);
  }
});
