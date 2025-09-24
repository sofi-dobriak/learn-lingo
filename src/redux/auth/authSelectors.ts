import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectIsInitialized = (state: RootState) => state.auth.isInitialized;

export const selectUserEmail = createSelector([selectUser], user => user?.email || '');

export const selectUserDisplayName = createSelector(
  [selectUser],
  user => user?.displayName || 'User'
);
