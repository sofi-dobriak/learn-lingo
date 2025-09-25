import type { RootState } from '../store';

export const selectFavTeachers = (state: RootState) => state.favoriteTeachers.favorites;
export const selectIsLoading = (state: RootState) => state.favoriteTeachers.isLoading;
export const selectError = (state: RootState) => state.favoriteTeachers.error;
