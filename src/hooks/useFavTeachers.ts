import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import type { Teacher } from '../types/teachers';
import { selectFavTeachers } from '../redux/favTeachers/favTeachersSelectors';
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from '../redux/favTeachers/favTeachersOperations';
import { selectUser } from '../redux/auth/authSelectors';
import { openModal } from '../redux/modals/modalSlice';

export const useFavTeachers = (teacherId: string, teacher: Teacher) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const favTeachers = useAppSelector(selectFavTeachers);
  const isFav = favTeachers.some(favTeacher => favTeacher.id === teacherId);

  const handleToggleFav = useCallback(() => {
    if (!user) {
      dispatch(openModal({ modalType: 'infoLogin' }));
      return;
    }

    if (isFav) {
      dispatch(removeFavoriteTeacher({ userId: user?.uid, teacherId }));
    } else {
      dispatch(addFavoriteTeacher({ userId: user?.uid, teacher }));
    }
  }, [dispatch, user, isFav, teacher, teacherId]);

  return { isFav, handleToggleFav };
};
