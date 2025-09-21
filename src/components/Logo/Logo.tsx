import s from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className={s.logo}>
      <img src='/images/logo.png' alt='Logo' width={28} height={28} />
      LearnLingo
    </Link>
  );
};

export default Logo;
