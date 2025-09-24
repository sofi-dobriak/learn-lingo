import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import { useId, useState } from 'react';
import s from './FormComponent.module.css';
import Button from '../Button/Button';
import { GoEyeClosed } from 'react-icons/go';
import { GoEye } from 'react-icons/go';
import type { ModalType } from '../../../redux/modals/modalSlice';

interface FormProps {
  type: ModalType;
}

interface FormInitialValues {
  userName: string;
  userEmail: string;
  userPassword: string;
}

const initialValues: FormInitialValues = {
  userName: '',
  userEmail: '',
  userPassword: '',
};

const FormComponent = ({ type }: FormProps) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const userNameID = useId();
  const userEmailID = useId();
  const userPasswordID = useId();

  const handleSubmit = (values: FormInitialValues, action: FormikHelpers<FormInitialValues>) => {
    console.log(values);
    action.resetForm();
  };

  const handleShowPass = () => setIsPassVisible(!isPassVisible);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        {type === 'register' && (
          <label className={s.inputContainer} htmlFor={userNameID}>
            <Field
              name='userName'
              id={userNameID}
              type='text'
              placeholder='Name'
              className={s.input}
            />
            <ErrorMessage name='userName' component='span' className={s.error} />
          </label>
        )}

        <label className={s.inputContainer} htmlFor={userEmailID}>
          <Field
            name='userEmail'
            id={userEmailID}
            type='email'
            placeholder='Email'
            className={s.input}
          />
          <ErrorMessage name='userEmail' component='span' className={s.error} />
        </label>

        <label className={s.inputContainer} htmlFor={userPasswordID}>
          <Field
            name='userPassword'
            id={userPasswordID}
            type={isPassVisible ? 'text' : 'password'}
            placeholder='Password'
            className={s.input}
          />
          <button onClick={handleShowPass} type='button' className={s.showHidePassButton}>
            {isPassVisible ? (
              <GoEye className={s.showHidePassIcon} />
            ) : (
              <GoEyeClosed className={s.showHidePassIcon} />
            )}
          </button>
          <ErrorMessage name='userPassword' component='span' className={s.error} />
        </label>

        <Button type='submit' variant='primary'>
          {type === 'register' ? 'Sign Up' : 'Log In'}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
