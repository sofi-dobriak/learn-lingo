import { BeatLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loaderBackdrop}>
      <BeatLoader
        className={s.loader}
        size={20}
        color='#f4c550'
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Loader;
