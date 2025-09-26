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
          {languages &&
            languages.map((language, index) => (
              <li key={index}>
                <p>{language}</p>
              </li>
            ))}
        </ul>

        {!languages && <p>—</p>}
      </li>
      <li className={s.speaksConditionsInfoItem}>
        <p>
          <span>Lesson Info:</span> {lesson_info ? lesson_info : '—'}
        </p>
      </li>
      <li className={s.speaksConditionsInfoItem}>
        <p>
          <span>Conditions:</span>
        </p>

        <ul className={s.conditionsList}>
          {conditions &&
            conditions.map((condition, index) => (
              <li key={index}>
                <p>{condition}</p>
              </li>
            ))}
        </ul>

        {!conditions && <p>—</p>}
      </li>
    </ul>
  );
};

export default Conditions;
