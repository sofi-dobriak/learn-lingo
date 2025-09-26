import { useAppDispatch } from '../../../redux/hooks';
import { closeModal } from '../../../redux/modals/modalSlice';
import { setActiveClass } from '../../../utils/setActiveClass';
import s from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = true;
  const dispatch = useAppDispatch();

  return (
    <nav className={s.nav}>
      <ul className={s.navLinksList}>
        <li>
          <NavLink
            onClick={() => dispatch(closeModal())}
            to='/'
            className={setActiveClass(s.navLink, s.active)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(closeModal())}
            to='/teachers'
            className={setActiveClass(s.navLink, s.active)}
          >
            Teachers
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink
              onClick={() => dispatch(closeModal())}
              to='/favorites'
              className={setActiveClass(s.navLink, s.active)}
            >
              Favorites
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
