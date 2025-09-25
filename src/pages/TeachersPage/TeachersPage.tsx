import s from './TeachersPage.module.css';
import { useEffect } from 'react';
import Container from '../../components/common/Container/Container';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchTeachers } from '../../redux/teachers/teachersOperations';
import TeachersList from '../../components/teachers/TeachersList/TeachersList';
import {
  selectError,
  selectHasMore,
  selectIsLoading,
  selectIsLoadingMore,
  selectLastKey,
} from '../../redux/teachers/teachersSelectors';
import Button from '../../components/common/Button/Button';
import SelectBlock from '../../components/common/SelectBlock/SelectBlock';
import { selectFilteredTeachers } from '../../redux/filters/filterSelectors';
import Loader from '../../components/common/Loader/Loader';

const TeachersPage = () => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector(selectFilteredTeachers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const hasMore = useAppSelector(selectHasMore);
  const lastKey = useAppSelector(selectLastKey);
  const isLoadingMore = useAppSelector(selectIsLoadingMore);

  useEffect(() => {
    dispatch(fetchTeachers({ reset: true }));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (hasMore && !isLoadingMore) {
      dispatch(
        fetchTeachers({
          startAfter: lastKey || undefined,
          limit: 4,
        })
      );
    }
  };

  return (
    <section className={s.teachersPage}>
      <Container>
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <>
            <SelectBlock />

            {teachers.length === 0 && <h2 className={s.noCards}>No cards</h2>}
            {teachers.length > 0 && <TeachersList teachers={teachers} />}
            {hasMore && teachers.length > 0 && (
              <Button
                variant='primary'
                onClick={handleLoadMore}
                className={s.loadMoreButton}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? 'Loading...' : 'Load More'}
              </Button>
            )}

            {!hasMore && <h2 className={s.allLoadedInfo}>All teachers loaded</h2>}
          </>
        )}
      </Container>
    </section>
  );
};

export default TeachersPage;
