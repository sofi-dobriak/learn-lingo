import { selectIsAuthenticated } from '../../redux/auth/authSelectors';
import { useAppSelector } from '../../redux/hooks';
import AuthNav from '../header/AuthNav/AuthNav';
import LoggedInComponent from '../header/LoggedInComponent/LoggedInComponent';
import Navigation from '../header/Navigation/Navigation';
import s from './MobileMenu.module.css';

const MobileMenu = () => {
  const isLoggedIn = useAppSelector(selectIsAuthenticated);

  return (
    <div className={s.mobileMenuContainer}>
      <Navigation />

      {isLoggedIn && <LoggedInComponent />}
      {!isLoggedIn && <AuthNav />}
    </div>
  );
};

export default MobileMenu;
