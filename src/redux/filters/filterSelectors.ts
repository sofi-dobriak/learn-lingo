import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { selectTeachers } from '../teachers/teachersSelectors';

export const selectLanguage = (state: RootState) => state.filters.selectedLanguage;
export const selectLevel = (state: RootState) => state.filters.selectedLevel;
export const selectPrice = (state: RootState) => state.filters.selectedPrice;

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectLanguage, selectLevel, selectPrice],
  (teachers, selectedLanguage, selectedLevel, selectedPrice) => {
    if (!selectedLanguage && !selectedLevel && !selectedPrice) {
      return teachers;
    }

    return teachers.filter(teacher => {
      const languageMatch =
        !selectedLanguage ||
        (teacher.languages && teacher.languages.includes(selectedLanguage as string));
      const levelMatch =
        !selectedLevel || (teacher.levels && teacher.levels.includes(selectedLevel as string));
      const priceMatch = !selectedPrice || teacher.price_per_hour === selectedPrice;

      return languageMatch && levelMatch && priceMatch;
    });
  }
);
