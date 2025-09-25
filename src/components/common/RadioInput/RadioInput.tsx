import clsx from 'clsx';
import s from './RadioInput.module.css';

interface RadioInputProps {
  id: string;
  value: string;
}

const RadioInput = ({ id, value }: RadioInputProps) => {
  return (
    <div className={s.radioLabelInputContainer}>
      <input
        type='radio'
        id={id}
        name='radio'
        value={value}
        className={clsx(s.radioInput, 'visually-hidden')}
      />
      <span className={s.radioSpan}></span>
      <label htmlFor={id} className={s.radioLabel}>
        {value}
      </label>
    </div>
  );
};

export default RadioInput;
