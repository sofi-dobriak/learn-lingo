import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type FilterType = 'language' | 'level' | 'price';

interface FilterInterface {
  filterType: FilterType;
  value: string | number | null;
}

interface InitialState {
  selectedLanguage: number | string | null;
  selectedLevel: string | number | null;
  selectedPrice: number | string | null;
}
const initialState: InitialState = {
  selectedLanguage: null,
  selectedLevel: null,
  selectedPrice: null,
};

export const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FilterInterface>) => {
      const { filterType, value } = action.payload;

      if (filterType === 'language') {
        state.selectedLanguage = value;
      } else if (filterType === 'level') {
        state.selectedLevel = value;
      } else if (filterType === 'price') {
        state.selectedPrice = value;
      }
    },

    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = slice.actions;
export const FiltersReducer = slice.reducer;
