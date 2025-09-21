// import s from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/teachers'>Teachers</NavLink>
      <NavLink to='/teachers'>Teachers</NavLink>
      <NavLink to='/favorites'>Favorites</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </nav>
  );
};

export default Navigation;
