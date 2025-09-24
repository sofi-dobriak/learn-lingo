import FormComponent from '../common/FormComponent/FormComponent';
import s from './Register.module.css';

const Register = () => {
  return (
    <>
      <h2 className={s.registerTitle}>Registration</h2>
      <p className={s.registerText}>
        Thank you for your interest in our platform! In order to register, we need some information.
        Please provide us with the following information
      </p>
      <FormComponent type='register' />
    </>
  );
};

export default Register;
