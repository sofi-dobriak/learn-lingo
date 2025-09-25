import { configureStore } from '@reduxjs/toolkit';
import { teachersReducer } from './teachers/teachersSlice';

import { FiltersReducer } from './filters/filterSlice';
import { ModalReducer } from './modals/modalSlice';
import { AuthReducer } from './auth/authSlice';
import { FavoritesReducer } from './favTeachers/favTeachersSlice';

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    filters: FiltersReducer,
    modals: ModalReducer,
    auth: AuthReducer,
    favoriteTeachers: FavoritesReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
