import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Teacher } from '../../types/teachers';
import { fetchTeachers } from './teachersOperations';

interface InitialState {
  teachers: Teacher[];
  favTeachers: Teacher[];
  isLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  teachers: [],
  favTeachers: [],
  isLoading: false,
  error: null,
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

export const { resetTeachers, addFavTeacher, deleteFavTeacher } = slice.actions;
export const teachersReducer = slice.reducer;
