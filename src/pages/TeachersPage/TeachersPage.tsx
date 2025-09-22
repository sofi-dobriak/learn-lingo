import s from './TeachersPage.module.css';
import { useEffect } from 'react';
import Container from '../../components/common/Container/Container';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchTeachers } from '../../redux/teachers/teachersOperations';

import TeachersList from '../../components/teachers/TeachersList/TeachersList';
import {
  selectError,
  selectIsLoading,
  selectTeachers,
} from '../../redux/teachers/teachersSelectors';

const TeachersPage = () => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector(selectTeachers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <section className={s.teachersPage}>
      <Container>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && !error && <TeachersList teachers={teachers} />}
      </Container>
    </section>
  );
};

export default TeachersPage;
