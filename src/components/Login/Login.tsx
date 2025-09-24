import FormComponent from '../common/FormComponent/FormComponent';
import s from './Login.module.css';

const Login = () => {
  return (
    <>
      <h2 className={s.loginTitle}>Log In</h2>
      <p className={s.loginText}>
        Welcome back! Please enter your credentials to access your account and continue your search
        for an teacher.
      </p>
      <FormComponent type='login' />
    </>
  );
};

export default Login;
