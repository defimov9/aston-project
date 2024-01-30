import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import cls from './Header.module.css';
import classNames from '../../utils/classNames';
import { useAuthActions } from '../../hooks/useAuthActions';

function Header() {
  const { user, logout } = useAuthActions();

  const isLinkActive = ({ isActive }: { isActive: boolean }) =>
    classNames(cls.link, { [cls.activeLink]: isActive });

  const visibleNavLinks = user ? (
    <>
      <li>
        <NavLink to="/favorites" className={isLinkActive}>
          Избранное
        </NavLink>
      </li>
      <li>
        <NavLink to="/history" className={isLinkActive}>
          История
        </NavLink>
      </li>
      <li>
        <button type="button" className={cls.logoutBtn} onClick={logout}>
          Выйти
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/login" className={isLinkActive}>
          Вход
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className={isLinkActive}>
          Регистрация
        </NavLink>
      </li>
    </>
  );

  return (
    <header className={cls.header}>
      <nav className={cls.navbar}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul className={cls.authLinks}>{visibleNavLinks}</ul>
      </nav>
    </header>
  );
}

export default Header;
