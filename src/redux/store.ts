import { configureStore } from '@reduxjs/toolkit';
import { teachersReducer } from './teachers/teachersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FiltersReducer } from './filters/filterSlice';
import { ModalReducer } from './modals/modalSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['favTeachers'],
};

const persistedReducer = persistReducer(persistConfig, teachersReducer);

export const store = configureStore({
  reducer: {
    teachers: persistedReducer,
    filters: FiltersReducer,
    modals: ModalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
