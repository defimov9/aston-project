import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../components/Layout/Layout';
import AuthRoute from './AuthRoute';

function AppRouter() {
  const Main = lazy(() => import('../pages/Main/Main'));
  const Login = lazy(() => import('../pages/Login/Login'));
  const Register = lazy(() => import('../pages/Register/Register'));
  const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
  const History = lazy(() => import('../pages/History/History'));
  const Character = lazy(() => import('../pages/Character/Character'));
  const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
  const Search = lazy(() => import('../pages/Search/Search'));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/search" element={<Search />} />

        <Route element={<AuthRoute requireAuth={false} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<AuthRoute requireAuth />}>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<History />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
