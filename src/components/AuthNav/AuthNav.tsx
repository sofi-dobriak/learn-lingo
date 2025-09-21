import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import { setActiveClass } from '../../utils/setAcriveClass';

const AuthNav = () => {
  return (
    <nav>
      <ul className={s.loginRegisterLinksList}>
        <li>
          <NavLink to='/login' className={setActiveClass(s.loginLink, s.active)}>
            <svg width={20} height={20}>
              <use href='/images/icons.svg#icon-login' className={s.loginIcon}></use>
            </svg>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/register' className={s.registerLink}>
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
