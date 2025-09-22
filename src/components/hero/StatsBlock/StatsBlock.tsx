import s from './StatsBlock.module.css';

const StatsBlock = () => {
  return (
    <ul className={s.statsList}>
      <li className={s.statsItem}>
        <p className={s.statsNumber}>32,000 +</p>
        <p className={s.statsDesc}>Experienced tutors</p>
      </li>
      <li className={s.statsItem}>
        <p className={s.statsNumber}>300,000 +</p>
        <p className={s.statsDesc}>5-star tutor reviews</p>
      </li>
      <li className={s.statsItem}>
        <p className={s.statsNumber}>120 +</p>
        <p className={s.statsDesc}>Subjects taught</p>
      </li>
      <li className={s.statsItem}>
        <p className={s.statsNumber}>200 +</p>
        <p className={s.statsDesc}>Tutor nationalities</p>
      </li>
    </ul>
  );
};

export default StatsBlock;
