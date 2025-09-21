import { setActiveClass } from '../../utils/setAcriveClass';
import s from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = true;

  return (
    <nav className={s.nav}>
      <ul className={s.navLinksList}>
        <li>
          <NavLink to='/' className={setActiveClass(s.navLink, s.active)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/teachers' className={setActiveClass(s.navLink, s.active)}>
            Teachers
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink to='/favorites' className={setActiveClass(s.navLink, s.active)}>
              Favorites
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
