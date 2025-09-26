import clsx from 'clsx';
import s from './RadioInput.module.css';

interface RadioInputProps {
  id: string;
  value: string;
}

const RadioInput = ({ id, value, ...rest }: RadioInputProps) => {
  return (
    <div className={clsx(s.radioLabelInputContainer)}>
      <input
        type='radio'
        id={id}
        value={value}
        className={clsx(s.radioInput, 'visually-hidden')}
        name='reason'
        {...rest}
      />
      <span className={s.radioSpan}></span>
      <label htmlFor={id} className={s.radioLabel}>
        {value}
      </label>
    </div>
  );
};

export default RadioInput;
