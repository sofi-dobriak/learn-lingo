import clsx from 'clsx';
import s from './Button.module.css';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
}

const Button = ({ type = 'button', className, children, ...rest }: ButtonProps) => {
  return (
    <button type={type} {...rest} className={clsx(s.button, className)}>
      {children}
    </button>
  );
};

export default Button;
