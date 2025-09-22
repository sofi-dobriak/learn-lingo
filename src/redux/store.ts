import { configureStore } from '@reduxjs/toolkit';
import { teachersReducer } from './teachers/teachersSlice';

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
