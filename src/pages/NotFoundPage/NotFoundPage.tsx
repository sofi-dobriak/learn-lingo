import s from './NotFoundPage.module.css';
import Container from '../../components/common/Container/Container';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className={s.notFoundPageSection}>
      <Container>
        <h2 className={s.notFoundPageTitle}>Page not found</h2>
        <Link to='/' className={s.notFoundPageLink}>
          Go back to home page
        </Link>
      </Container>
    </section>
  );
};

export default NotFoundPage;
