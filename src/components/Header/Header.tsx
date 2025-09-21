import s from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
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
