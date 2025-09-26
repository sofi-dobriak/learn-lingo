import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Loader from './components/common/Loader/Loader';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Modal from './components/common/Modal/Modal';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { selectModalType } from './redux/modals/modalSelectors';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Booking from './components/Booking/Booking';
import { checkAuthState } from './redux/auth/authOperations';
import InfoMessageLogin from './components/InfoMessageLogin/InfoMessageLogin';
import InfoSuccessBooking from './components/InfoSuccessBooking/InfoSuccessBooking';
import MobileMenu from './components/MobileMenu/MobileMenu';
import FilterMobile from './components/FilterMobile/FilterMobile';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useAppDispatch();
  const modalType = useAppSelector(selectModalType);

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/teachers' element={<TeachersPage />} />

            <Route
              path='/favorites'
              element={<PrivateRoute redirectTo='/teachers' component={<FavoritesPage />} />}
            />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Modal>
        {modalType === 'login' && <Login />}
        {modalType === 'register' && <Register />}
        {modalType === 'booking' && <Booking />}
        {modalType === 'infoLogin' && <InfoMessageLogin />}
        {modalType === 'infoSuccess' && <InfoSuccessBooking />}
        {modalType === 'mobileMenu' && <MobileMenu />}
        {modalType === 'mobileFilters' && <FilterMobile />}
      </Modal>
    </>
  );
}

export default App;
