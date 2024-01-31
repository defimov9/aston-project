import { Navigate, Outlet } from 'react-router-dom';
import { useAuthActions } from '../hooks/useAuthActions';

function PrivateRoute() {
  const { user } = useAuthActions();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
