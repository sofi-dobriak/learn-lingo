import s from './AuthNav.module.css';
import Button from '../../common/Button/Button';
import { useAppDispatch } from '../../../redux/hooks';
import { openModal } from '../../../redux/modals/modalSlice';
const AuthNav = () => {
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ul className={s.loginRegisterLinksList}>
        <li>
          <button type='button' onClick={() => dispatch(openModal('login'))}>
            <svg width={20} height={20}>
              <use href='/images/icons.svg#icon-login' className={s.loginIcon}></use>
            </svg>
            Login
          </button>
        </li>
        <li>
          <Button onClick={() => dispatch(openModal('register'))}>Register</Button>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
