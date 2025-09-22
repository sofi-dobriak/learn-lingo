import s from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default Header;
