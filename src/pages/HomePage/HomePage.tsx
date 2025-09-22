import s from './HomePage.module.css';
import Container from '../../components/common/Container/Container';
import MainBlock from '../../components/hero/MainBlock/MainBlock';
import StatsBlock from '../../components/hero/StatsBlock/StatsBlock';

const HomePage = () => {
  return (
    <section className={s.homePage}>
      <Container>
        <MainBlock />
        <StatsBlock />
      </Container>
    </section>
  );
};

export default HomePage;
