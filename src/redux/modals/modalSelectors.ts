import type { RootState } from '../store';

export const selectIsVisible = (state: RootState) => state.modals.isVisible;
export const selectModalType = (state: RootState) => state.modals.modalType;
export const selectTeacherId = (state: RootState) => state.modals.teacherId;
