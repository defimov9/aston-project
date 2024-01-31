import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../components/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
