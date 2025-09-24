import { createSlice } from '@reduxjs/toolkit';

export type ModalType = 'login' | 'register' | 'booking' | 'info';

interface initialState {
  isVisible: boolean;
  modalType: ModalType | null;
}

const initialState: initialState = {
  isVisible: false,
  modalType: null,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isVisible = true;
      state.modalType = action.payload;
    },
    closeModal: state => {
      state.isVisible = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = slice.actions;
export const ModalReducer = slice.reducer;
