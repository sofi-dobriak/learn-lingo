import toast from 'react-hot-toast';
import { logoutUser } from '../../redux/auth/authOperations';
import s from './ConfirmLogOut.module.css';
import { useAppDispatch } from '../../redux/hooks';
import Button from '../common/Button/Button';
import { closeModal } from '../../redux/modals/modalSlice';

const ConfirmLogOut = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
    dispatch(closeModal());
    toast.success('Successfully logged out');
  };

  return (
    <div>
      <h2 className={s.confirmLogOuTitle}>Are you sure you want to log out?</h2>
      <ul className={s.confirmLogOutList}>
        <li>
          <Button
            onClick={() => dispatch(closeModal())}
            variant='primary'
            className={s.confirmLogOutCancelButton}
          >
            Cancel
          </Button>
        </li>
        <li>
          <Button onClick={handleLogOut} variant='primary' className={s.confirmLogOutButton}>
            Log Out
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ConfirmLogOut;
