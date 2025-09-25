import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectIsAuthenticated } from '../../redux/auth/authSelectors';
import toast from 'react-hot-toast';

interface PrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ component, redirectTo = '/' }: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsAuthenticated);

  if (!isLoggedIn) {
    toast.error('Please log in');
    return <Navigate to={redirectTo} />;
  }

  return component;
};

export default PrivateRoute;
