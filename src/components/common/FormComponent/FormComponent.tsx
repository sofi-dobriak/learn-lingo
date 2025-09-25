import { useId, useState } from 'react';
import s from './FormComponent.module.css';
import Button from '../Button/Button';
import { GoEyeClosed } from 'react-icons/go';
import { GoEye } from 'react-icons/go';
import { closeModal, type ModalType } from '../../../redux/modals/modalSlice';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../redux/hooks';
import { loginUser, registerUser } from '../../../redux/auth/authOperations';
import TextInput from '../TextInput/TextInput';

interface FormProps {
  type: ModalType;
}

interface FormDataInterface {
  userName: string;
  userEmail: string;
  userPassword: string;
}

const FormComponent = ({ type }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataInterface>();

  const dispatch = useAppDispatch();
  const [isPassVisible, setIsPassVisible] = useState(false);

  const userNameID = useId();
  const userEmailID = useId();
  const userPasswordID = useId();

  const onSubmit = (data: FormDataInterface) => {
    if (!data) return;

    if (type === 'register') {
      dispatch(
        registerUser({
          email: data?.userEmail,
          password: data?.userPassword,
          displayName: data?.userName,
        })
      );
      dispatch(closeModal());
    } else {
      dispatch(
        loginUser({
          email: data?.userEmail,
          password: data?.userPassword,
        })
      );
      dispatch(closeModal());
    }

    reset();
  };

  const handleShowPass = () => setIsPassVisible(!isPassVisible);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {type === 'register' && (
        <div className={s.labelInputContainer}>
          <TextInput
            {...register('userName', { required: true, maxLength: 20 })}
            name='userName'
            id={userNameID}
            placeholder='Name'
            autoComplete='name'
            hasError={!!errors.userName}
          />
          {errors.userName && <span className={s.error}>Required. Max length 20 chars</span>}
        </div>
      )}

      <div className={s.labelInputContainer}>
        mlFor={userEmailID}
        <TextInput
          {...register('userEmail', { required: true })}
          name='userEmail'
          id={userEmailID}
          placeholder='Email'
          autoComplete='email'
          hasError={!!errors.userName}
        />
        {errors.userEmail && <span className={s.error}>Required. Invalid email format</span>}
      </div>

      <div className={s.labelInputContainer}>
        <TextInput
          {...register('userPassword', { required: true, minLength: 8 })}
          name='userPassword'
          id={userPasswordID}
          type={isPassVisible ? 'text' : 'password'}
          placeholder='Password'
          autoComplete='new-password'
          hasError={!!errors.userName}
        />

        <button onClick={handleShowPass} type='button' className={s.showHidePassButton}>
          {isPassVisible ? (
            <GoEye className={s.showHidePassIcon} />
          ) : (
            <GoEyeClosed className={s.showHidePassIcon} />
          )}
        </button>
        {errors.userPassword && <span className={s.error}>Required. Min length 8 chars</span>}
      </div>

      <Button type='submit' variant='primary'>
        {type === 'register' ? 'Sign Up' : 'Log In'}
      </Button>
    </form>
  );
};

export default FormComponent;
