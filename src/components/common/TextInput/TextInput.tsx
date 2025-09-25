import clsx from 'clsx';
import s from './TextInput.module.css';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  id: string;
  containerClassName?: string;
  className?: string;
  placeholder: string;
  hasError?: boolean;
}

const TextInput = ({
  type = 'text',
  name,
  id,
  placeholder,
  className,
  hasError = false,
  ...rest
}: TextInputProps) => {
  return (
    <label className={clsx(s.inputContainer, { [s.inputError]: hasError })} htmlFor={id}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        {...rest}
        className={clsx(s.input, className)}
      />
    </label>
  );
};

export default TextInput;
