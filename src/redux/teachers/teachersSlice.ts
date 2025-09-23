import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Teacher } from '../../types/teachers';
import { fetchTeachers } from './teachersOperations';

interface InitialState {
  teachers: Teacher[];
  favTeachers: Teacher[];
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string | null;
  lastKey: string | null;
  hasMore: boolean;
  currentPage: number;
}

const initialState: InitialState = {
  teachers: [],
  favTeachers: [],
  isLoading: false,
  isLoadingMore: false,
  error: null,
  lastKey: null,
  hasMore: true,
  currentPage: 0,
};

const slice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    resetTeachers: state => {
      return {
        ...initialState,
        favTeachers: state.favTeachers,
      };
    },
    addFavTeacher: (state, action: PayloadAction<Teacher>) => {
      state.favTeachers.push(action.payload);
    },
    deleteFavTeacher: (state, action: PayloadAction<string>) => {
      state.favTeachers = state.favTeachers.filter(favTeacher => favTeacher.id !== action.payload);
    },
    resetPagination: state => {
      state.teachers = [];
      state.lastKey = null;
      state.hasMore = true;
      state.currentPage = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, (state, action) => {
        const { reset } = action.meta.arg;

        if (reset) {
          state.isLoading = true;
        } else {
          state.isLoadingMore = true;
        }

        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoadingMore = false;
        const { teachers, lastKey, hasMore, reset } = action.payload;

        if (reset) {
          state.teachers = teachers;
          state.currentPage = 1;
        } else {
          state.teachers.push(...teachers);
          state.currentPage += 1;
        }

        state.lastKey = lastKey;
        state.hasMore = hasMore;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoadingMore = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetTeachers, addFavTeacher, deleteFavTeacher, resetPagination } = slice.actions;
export const teachersReducer = slice.reducer;
