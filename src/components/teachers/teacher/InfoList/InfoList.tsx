import s from './InfoList.module.css';

interface InfoListProps {
  lessons_done: string;
  rating: number;
  price_per_hour: number;
}

const InfoList = ({ lessons_done, rating, price_per_hour }: InfoListProps) => {
  return (
    <ul className={s.teacherInfoList}>
      <li className={s.infoItem}>
        <svg width={16} height={16} className={s.lessonIcon}>
          <use href='/images/icons.svg#icon-book-open'></use>
        </svg>
        <p>Lessons online</p>
      </li>
      <li className={s.infoItem}>
        <p>Lessons done: {lessons_done ? lessons_done : '—'}</p>
      </li>
      <li className={s.infoItem}>
        <svg width={18} height={18} className={s.starIcon}>
          <use href='/images/icons.svg#icon-star'></use>
        </svg>
        <p>Rating: {rating ? rating : '—'}</p>
      </li>
      <li className={s.infoItem}>
        <p>
          Price / 1 hour: <span>{price_per_hour ? `${price_per_hour}$` : '—'}</span>
        </p>
      </li>
    </ul>
  );
};

export default InfoList;
