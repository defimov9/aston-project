import { Navigate, Outlet } from 'react-router-dom';
import { useAuthActions } from '../hooks/useAuthActions';

function PrivateOutlet() {
  const { user } = useAuthActions();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
