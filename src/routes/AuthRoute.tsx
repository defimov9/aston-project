import { Navigate, Outlet } from 'react-router-dom';
import { useAuthActions } from '../hooks/useAuthActions';

interface Props {
  requireAuth: boolean;
}

function AuthRoute({ requireAuth = true }: Props) {
  const { user, loading } = useAuthActions();

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (requireAuth) {
    return user ? <Outlet /> : <Navigate to="/login" />;
  }

  return user ? <Navigate to="/" /> : <Outlet />;
}

export default AuthRoute;
