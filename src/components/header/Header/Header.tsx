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
        <>
          <h2>Hello, {user?.displayName}!</h2>
          <Button
            variant='secondary'
            onClick={() => dispatch(logoutUser())}
            className={s.logOutButton}
          >
            Log out
          </Button>
        </>
      ) : (
        <AuthNav />
      )}
    </header>
  );
};

export default Header;
