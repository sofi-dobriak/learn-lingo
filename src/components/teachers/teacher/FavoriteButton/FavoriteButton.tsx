import s from './FavoriteButton.module.css';

const FavoriteButton = () => {
  return (
    <button
      type='button'
      aria-label="Button for add a teacher's card to the favorites list"
      className={s.favButton}
    >
      <svg width={26} height={26} className={s.favIcon}>
        <use href='/images/icons.svg#icon-heart'></use>
      </svg>
    </button>
  );
};

export default FavoriteButton;
