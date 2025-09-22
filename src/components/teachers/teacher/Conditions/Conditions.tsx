import s from './Conditions.module.css';

interface ConditionsProps {
  languages: string[];
  lesson_info: string;
  conditions: string[];
}

const Conditions = ({ languages, lesson_info, conditions }: ConditionsProps) => {
  return (
    <ul className={s.speaksConditionsInfoList}>
      <li className={s.speaksConditionsInfoItem}>
        <p>
          <span>Speaks:</span>
        </p>
        <ul className={s.speaksList}>
          {languages.map((language, index) => (
            <li key={index}>
              <p>{language}</p>
            </li>
          ))}
        </ul>
      </li>
      <li className={s.speaksConditionsInfoItem}>
        <p>
          <span>Lesson Info:</span> {lesson_info}.
        </p>
      </li>
      <li className={s.speaksConditionsInfoItem}>
        <p>
          <span>Conditions:</span>
        </p>
        <ul className={s.conditionsList}>
          {conditions.map((condition, index) => (
            <li key={index}>
              <p>{condition}</p>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Conditions;
