import Container from '../../components/common/Container/Container';
import TeachersList from '../../components/teachers/TeachersList/TeachersList';
import { useAppSelector } from '../../redux/hooks';
import {
  selectError,
  selectFavTeachers,
  selectIsLoading,
} from '../../redux/teachers/teachersSelectors';
import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favTeachers = useAppSelector(selectFavTeachers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  return (
    <section className={s.favTeachersPage}>
      <Container>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && !error && <TeachersList teachers={favTeachers} />}
      </Container>
    </section>
  );
};

export default FavoritesPage;
