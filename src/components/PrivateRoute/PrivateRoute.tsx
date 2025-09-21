import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ component, redirectTo = '/' }: PrivateRouteProps) => {
  const isLoggedIn = true;
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
