import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Teacher } from '../../types/teachers';
import { fetchTeachers } from './teachersOperations';

interface InitialState {
  teachers: Teacher[];
  isLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  teachers: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action: PayloadAction<Teacher[]>) => {
        state.isLoading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = slice.actions;
export const teachersReducer = slice.reducer;
