import { Navigate, Outlet } from 'react-router-dom';
import { useAuthActions } from '../hooks/useAuthActions';

function PublicRoute() {
  const { user } = useAuthActions();
  return user ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoute;
