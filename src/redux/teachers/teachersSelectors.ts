import type { RootState } from '../store';

export const selectTeachers = (state: RootState) => state.teachers.teachers;
export const selectIsLoading = (state: RootState) => state.teachers.isLoading;
export const selectError = (state: RootState) => state.teachers.error;
