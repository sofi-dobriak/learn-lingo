import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectFavTeachers } from '../redux/teachers/teachersSelectors';
import type { Teacher } from '../types/teachers';
import { addFavTeacher, deleteFavTeacher } from '../redux/teachers/teachersSlice';

export const useFavTeachers = (teacherId: string, teacher: Teacher) => {
  const dispatch = useAppDispatch();

  const favTeachers = useAppSelector(selectFavTeachers);
  const isFav = favTeachers.some(favTeacher => favTeacher.id === teacherId);

  const handleToggleFav = useCallback(() => {
    if (isFav) {
      dispatch(deleteFavTeacher(teacherId));
    } else {
      dispatch(addFavTeacher(teacher));
    }
  }, [dispatch, isFav, teacher, teacherId]);

  return { isFav, handleToggleFav };
};
