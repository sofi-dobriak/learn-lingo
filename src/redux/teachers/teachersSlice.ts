import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Teacher } from '../../types/teachers';
import {
  fetchAllLanguages,
  fetchAllLevels,
  fetchAllPrices,
  fetchTeachers,
} from './teachersOperations';

export interface SelectOption {
  value: string | number;
  label: string | number;
}

interface PriceOption {
  value: number;
  label: number;
}

interface InitialState {
  teachers: Teacher[];
  languages: SelectOption[];
  levels: SelectOption[];
  prices: PriceOption[];
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
  languages: [],
  levels: [],
  prices: [],
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
  },
  extraReducers: builder => {
    builder

      // teachers
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
      })

      // languages
      .addCase(fetchAllLanguages.pending, () => {})
      .addCase(fetchAllLanguages.fulfilled, (state, action: PayloadAction<SelectOption[]>) => {
        state.languages = action.payload;
      })
      .addCase(fetchAllLanguages.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      //levels
      .addCase(fetchAllLevels.pending, () => {})
      .addCase(fetchAllLevels.fulfilled, (state, action: PayloadAction<SelectOption[]>) => {
        state.levels = action.payload;
      })
      .addCase(fetchAllLevels.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      //prices
      .addCase(fetchAllPrices.pending, () => {})
      .addCase(fetchAllPrices.fulfilled, (state, action: PayloadAction<PriceOption[]>) => {
        state.prices = action.payload;
      })
      .addCase(fetchAllPrices.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { resetTeachers, addFavTeacher, deleteFavTeacher } = slice.actions;
export const teachersReducer = slice.reducer;
