import { useAppDispatch } from '../../redux/hooks';
import { closeModal, openModal } from '../../redux/modals/modalSlice';
import Button from '../common/Button/Button';
import s from './InfoMessageLogin.module.css';

const InfoMessageLogin = () => {
  const dispatch = useAppDispatch();

  const handleLoginOpenModal = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalType: 'login' }));
  };

  const handleRegisterOpenModal = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalType: 'register' }));
  };

  return (
    <>
      <h2 className={s.infoLoginTitle}>Please, log in to your account</h2>

      <ul className={s.infoButtonsList}>
        <li>
          <Button onClick={handleLoginOpenModal} variant='primary' className={s.infoLoginButton}>
            Login
          </Button>
        </li>
        <li>
          <Button
            onClick={handleRegisterOpenModal}
            variant='primary'
            className={s.infoRegisterButton}
          >
            Register
          </Button>
        </li>
      </ul>
    </>
  );
};

export default InfoMessageLogin;
