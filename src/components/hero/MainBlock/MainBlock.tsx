import s from './MainBlock.module.css';
import { NavLink } from 'react-router-dom';

const MainBlock = () => {
  return (
    <div className={s.heroMainBlock}>
      <div className={s.heroMainBlockText}>
        <h1 className={s.heroTitle}>
          Unlock your potential with the best <span>language</span> tutors
        </h1>
        <p className={s.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language
          proficiency to new heights by connecting with highly qualified and experienced tutors.
        </p>

        <NavLink to='/teachers' className={s.heroLink}>
          Get started
        </NavLink>
      </div>

      <picture>
        <source srcSet='/images/hero.webp 1x, /images/hero@2x.webp 2x' type='image/webp' />
        <source srcSet='/images/hero.png 1x, /images/hero@2x.png 2x' type='image/png' />
        <img
          src='/images/hero.png'
          alt='Hero screen image'
          className={s.heroImage}
          width={568}
          height={530}
        />
      </picture>
    </div>
  );
};

export default MainBlock;
