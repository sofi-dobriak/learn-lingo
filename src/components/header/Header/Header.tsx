import s from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectIsAuthenticated } from '../../../redux/auth/authSelectors';
import Button from '../../common/Button/Button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useMediaQueryView } from '../../../hooks/useMediaQueryView';
import { openModal } from '../../../redux/modals/modalSlice';
import LoggedInComponent from '../LoggedInComponent/LoggedInComponent';

const Header = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsAuthenticated);
  const { isDesktop } = useMediaQueryView();

  return (
    <header className={s.header}>
      <Logo />

      {isDesktop && (
        <>
          <Navigation />

          {isLoggedIn && <LoggedInComponent />}
          {!isLoggedIn && <AuthNav />}
        </>
      )}

      {!isDesktop && (
        <Button
          onClick={() => dispatch(openModal({ modalType: 'mobileMenu' }))}
          variant='secondary'
          className={s.burgerButton}
        >
          <RxHamburgerMenu className={s.burgerIcon} />
        </Button>
      )}
    </header>
  );
};

export default Header;
