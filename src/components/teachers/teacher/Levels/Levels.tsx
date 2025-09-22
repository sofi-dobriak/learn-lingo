import s from './Levels.module.css';

interface LevelsProps {
  levels: string[];
}

const Levels = ({ levels }: LevelsProps) => {
  return (
    <ul className={s.levelsList}>
      {levels.map((level, index) => (
        <li key={index} className={s.levelsItem}>
          <p className={s.levelsText}>#{level}</p>
        </li>
      ))}
    </ul>
  );
};

export default Levels;
