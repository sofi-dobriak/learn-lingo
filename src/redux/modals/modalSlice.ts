import { createSlice } from '@reduxjs/toolkit';

export type ModalType = 'login' | 'register' | 'booking' | 'info';

interface initialState {
  modalType: ModalType | null;
}

const initialState: initialState = {
  modalType: null,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload;
    },
    closeModal: state => {
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = slice.actions;
export const ModalReducer = slice.reducer;
