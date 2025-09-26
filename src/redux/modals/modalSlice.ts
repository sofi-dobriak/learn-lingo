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
      document.body.style.overflow = 'hidden';
    },
    closeModal: state => {
      state.isVisible = false;
      state.modalType = null;
      state.teacherId = null;
      document.body.style.overflow = '';
    },
  },
});

export const { openModal, closeModal } = slice.actions;
export const ModalReducer = slice.reducer;
