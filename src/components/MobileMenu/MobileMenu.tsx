import toast from 'react-hot-toast';
import { logoutUser } from '../../redux/auth/authOperations';
import { selectIsAuthenticated, selectUser } from '../../redux/auth/authSelectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/modals/modalSlice';
import Button from '../common/Button/Button';
import AuthNav from '../header/AuthNav/AuthNav';
import Navigation from '../header/Navigation/Navigation';
import s from './MobileMenu.module.css';

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isLoggedIn = useAppSelector(selectIsAuthenticated);

  const handleLogOut = () => {
    dispatch(closeModal());
    dispatch(logoutUser());
    toast.success('Successfully logged out');
  };

  return (
    <div className={s.mobileMenuContainer}>
      <Navigation />

      {isLoggedIn && (
        <div className={s.userNameLogOutContainer}>
          <h2 className={s.displayName}>Hello, {user?.displayName}!</h2>
          <Button variant='primary' onClick={handleLogOut} className={s.logOutButton}>
            Log out
          </Button>
        </div>
      )}

      {!isLoggedIn && <AuthNav />}
    </div>
  );
};

export default MobileMenu;
