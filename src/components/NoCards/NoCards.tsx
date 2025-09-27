import s from './NoCards.module.css';

const NoCards = () => {
  return (
    <div className={s.noCardsBlock}>
      <h2 className={s.noCardsTitle}>No cards</h2>
    </div>
  );
};

export default NoCards;
