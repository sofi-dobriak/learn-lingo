import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectIsAuthenticated } from '../../redux/auth/authSelectors';
import { useEffect } from 'react';
import { openModal } from '../../redux/modals/modalSlice';

interface PrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ component, redirectTo = '/' }: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(openModal({ modalType: 'infoLogin' }));
    }
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return component;
};

export default PrivateRoute;
