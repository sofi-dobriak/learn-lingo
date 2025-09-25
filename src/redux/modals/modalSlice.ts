import { createSlice } from '@reduxjs/toolkit';

export type ModalType = 'login' | 'register' | 'booking' | 'info';

interface initialState {
  isVisible: boolean;
  modalType: ModalType | null;
  teacherId?: string | null;
}

const initialState: initialState = {
  isVisible: false,
  modalType: null,
  teacherId: null,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isVisible = true;
      state.modalType = action.payload.modalType;
      state.teacherId = action.payload.teacherId;
    },
    closeModal: () => initialState,
  },
});

export const { openModal, closeModal } = slice.actions;
export const ModalReducer = slice.reducer;
