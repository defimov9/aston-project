import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import cls from './Layout.module.css';

function Layout() {
  return (
    <>
      <Header />
      <div className={cls.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Layout;
