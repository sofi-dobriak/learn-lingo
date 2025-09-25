import { useEffect } from 'react';
import Container from '../../components/common/Container/Container';
import Loader from '../../components/common/Loader/Loader';
import TeachersList from '../../components/teachers/TeachersList/TeachersList';
import {
  selectFavTeachers,
  selectError,
  selectIsLoading,
} from '../../redux/favTeachers/favTeachersSelectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import s from './FavoritesPage.module.css';
import { fetchFavoriteTeachers } from '../../redux/favTeachers/favTeachersOperations';
import { selectUser } from '../../redux/auth/authSelectors';

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const favTeachers = useAppSelector(selectFavTeachers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (!user) return;

    dispatch(fetchFavoriteTeachers(user?.uid));
  }, [dispatch, user, user?.uid]);

  return (
    <section className={s.favTeachersPage}>
      <Container>
        {isLoading && <Loader />}
        {!isLoading && !error && <TeachersList teachers={favTeachers} />}
      </Container>
    </section>
  );
};

export default FavoritesPage;
