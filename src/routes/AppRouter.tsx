import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateOutlet from './PrivateOutlet';
import Layout from '../components/Layout/Layout';

function AppRouter() {
  const Main = lazy(() => import('../pages/Main/Main'));
  const Login = lazy(() => import('../pages/Login/Login'));
  const Register = lazy(() => import('../pages/Register/Register'));
  const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
  const History = lazy(() => import('../pages/History/History'));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateOutlet />}>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
