import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectIsAuthenticated } from '../../redux/auth/authSelectors';

interface PrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ component, redirectTo = '/' }: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsAuthenticated);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
