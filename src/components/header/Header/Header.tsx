import s from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectIsAuthenticated, selectUser } from '../../../redux/auth/authSelectors';
import Button from '../../common/Button/Button';
import { logoutUser } from '../../../redux/auth/authOperations';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isLoggedIn = useAppSelector(selectIsAuthenticated);

  return (
    <header className={s.header}>
      <Logo />
      <Navigation />

      {isLoggedIn ? (
        <div className={s.userNameLogOutContainer}>
          <h2 className={s.displayName}>Hello, {user?.displayName}!</h2>
          <Button
            variant='primary'
            onClick={() => dispatch(logoutUser())}
            className={s.logOutButton}
          >
            Log out
          </Button>
        </div>
      ) : (
        <AuthNav />
      )}
    </header>
  );
};

export default Header;
