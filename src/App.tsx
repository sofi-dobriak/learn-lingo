import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Loader from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/teachers' element={<TeachersPage />} />
          <Route
            path='/favorites'
            element={<PrivateRoute redirectTo='/login' component={<FavoritesPage />} />}
          />
        </Route>

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
