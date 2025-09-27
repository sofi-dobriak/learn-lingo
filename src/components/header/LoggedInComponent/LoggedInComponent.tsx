import { selectUser } from '../../../redux/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { openModal } from '../../../redux/modals/modalSlice';
import Button from '../../common/Button/Button';
import s from './LoggedInComponent.module.css';

const LoggedInComponent = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  return (
    <div className={s.userNameLogOutContainer}>
      <h2 className={s.displayName}>Hello, {user?.displayName}!</h2>
      <Button
        variant='primary'
        onClick={() => dispatch(openModal({ modalType: 'confirmLogOut' }))}
        className={s.logOutButton}
      >
        Log out
      </Button>
    </div>
  );
};

export default LoggedInComponent;
