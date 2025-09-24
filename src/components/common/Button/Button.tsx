import clsx from 'clsx';
import s from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
}

const Button = ({ type = 'button', className, variant, children, ...rest }: ButtonProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={clsx(s.button, className, {
        [s.buttonPrimary]: variant === 'primary',
        [s.buttonSecondary]: variant === 'secondary',
        [s.disabled]: rest.disabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
