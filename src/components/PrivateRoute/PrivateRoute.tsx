import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectIsAuthenticated } from '../../redux/auth/authSelectors';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

interface PrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ component, redirectTo = '/' }: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Please log in');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return component;
};

export default PrivateRoute;
