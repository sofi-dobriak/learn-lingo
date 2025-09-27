import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoriteTeacher,
  fetchFavoriteTeachers,
  removeFavoriteTeacher,
} from './favTeachersOperations';
import type { Teacher } from '../../types/teachers';

interface FavoritesState {
  favorites: Teacher[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FavoritesState = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addFavoriteTeacher.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFavoriteTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites.push(action.payload);
      })
      .addCase(addFavoriteTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(removeFavoriteTeacher.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFavoriteTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = state.favorites.filter(teacher => teacher.id !== action.payload);
      })
      .addCase(removeFavoriteTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchFavoriteTeachers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoriteTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const FavoritesReducer = favoritesSlice.reducer;
