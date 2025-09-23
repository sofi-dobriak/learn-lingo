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
  selectTeachers,
} from '../../redux/teachers/teachersSelectors';
import Button from '../../components/common/Button/Button';

const TeachersPage = () => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector(selectTeachers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const hasMore = useAppSelector(selectHasMore);
  const lastKey = useAppSelector(selectLastKey);
  const isLoadingMore = useAppSelector(selectIsLoadingMore);

  useEffect(() => {
    if (teachers.length === 0) {
      dispatch(fetchTeachers({ reset: true }));
    }
  }, [dispatch, teachers.length]);

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
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && !error && (
          <>
            <TeachersList teachers={teachers} />
            {hasMore && (
              <Button
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
