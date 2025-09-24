import type { RootState } from '../store';

export const selectModalType = (state: RootState) => state.modals.modalType;
