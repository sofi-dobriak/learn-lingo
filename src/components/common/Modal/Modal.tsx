import clsx from 'clsx';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import { closeModal } from '../../../redux/modals/modalSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type React from 'react';
import { useEffect } from 'react';
import { selectIsVisible, selectModalType } from '../../../redux/modals/modalSelectors';
import Container from '../Container/Container';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ children, className = '' }: ModalProps) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectIsVisible);
  const modalType = useAppSelector(selectModalType);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return createPortal(
    <div className={clsx(s.modalBackdrop, isVisible && s.visible)} onClick={handleBackdropClick}>
      <Container>
        <div
          className={clsx(
            s.modalContent,
            className,
            modalType === 'booking' && s.bookingModalContent
          )}
        >
          <button onClick={() => dispatch(closeModal())} type='button' className={s.buttonClose}>
            <svg width={32} height={32} className={s.iconClose}>
              <use href='/images/icons.svg#icon-close'></use>
            </svg>
          </button>
          {children}
        </div>
      </Container>
    </div>,
    document.body
  );
};

export default Modal;
