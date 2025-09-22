import clsx from 'clsx';
import { useFavTeachers } from '../../../../hooks/useFavTeachers';
import type { Teacher } from '../../../../types/teachers';
import s from './FavoriteButton.module.css';

const FavoriteButton = (teacher: Teacher) => {
  const { isFav, handleToggleFav } = useFavTeachers(teacher.id, teacher);

  return (
    <button
      onClick={handleToggleFav}
      type='button'
      aria-label="Button for add a teacher's card to the favorites list"
      className={s.favButton}
    >
      <svg width={26} height={26} className={clsx(s.favIcon, isFav && s.active)}>
        <use href='/images/icons.svg#icon-heart'></use>
      </svg>
    </button>
  );
};

export default FavoriteButton;
