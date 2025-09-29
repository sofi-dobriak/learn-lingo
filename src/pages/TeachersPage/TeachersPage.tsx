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
import SelectBlock from '../../components/common/SelectBlock/SelectBlock';
import { selectFilteredTeachers } from '../../redux/filters/filterSelectors';
import Loader from '../../components/common/Loader/Loader';
import { useMediaQueryView } from '../../hooks/useMediaQueryView';
import { openModal } from '../../redux/modals/modalSlice';
import NoCards from '../../components/NoCards/NoCards';
import { resetFilters } from '../../redux/filters/filterSlice';

const TeachersPage = () => {
  const dispatch = useAppDispatch();

  const allTeachers = useAppSelector(selectTeachers);
  const teachers = useAppSelector(selectFilteredTeachers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const hasMore = useAppSelector(selectHasMore);
  const lastKey = useAppSelector(selectLastKey);
  const isLoadingMore = useAppSelector(selectIsLoadingMore);

  const { isDesktop } = useMediaQueryView();

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

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const shouldShowLoadMore = hasMore && teachers.length > 0;
  const shouldShowAllLoaded = !hasMore && teachers.length > 0 && allTeachers.length > 0;

  return (
    <section className={s.teachersPage}>
      <Container>
        {isLoading && <Loader />}

        {!isLoading && !error && (
          <>
            {isDesktop && <SelectBlock />}

            {!isDesktop && (
              <div className={s.mobFilterButtons}>
                <Button
                  onClick={() => dispatch(openModal({ modalType: 'mobileFilters' }))}
                  variant='primary'
                  className={s.filtersButton}
                >
                  Filters
                </Button>

                <Button onClick={handleResetFilters} variant='secondary' className={s.resetButton}>
                  Reset
                </Button>
              </div>
            )}

            {teachers.length === 0 && <NoCards />}

            {teachers.length > 0 && <TeachersList teachers={teachers} />}

            {shouldShowLoadMore && (
              <Button
                variant='primary'
                onClick={handleLoadMore}
                className={s.loadMoreButton}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? 'Loading...' : 'Load More'}
              </Button>
            )}

            {shouldShowAllLoaded && <h2 className={s.allLoadedInfo}>All teachers loaded</h2>}
          </>
        )}
      </Container>
    </section>
  );
};

export default TeachersPage;
