import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import cls from './Header.module.css';
import classNames from '../../utils/classNames';
import { useAuthActions } from '../../hooks/useAuthActions';
import { useTheme } from '../../hooks/useTheme';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  const { user, logout, loading } = useAuthActions();
  const { theme, toggleTheme } = useTheme();

  const headerClass = classNames(cls.header, {
    [cls.green]: theme === 'green',
  });

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
    <header className={headerClass}>
      <nav className={cls.navbar}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        {!loading && (
          <ul className={cls.authLinks}>
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className={cls.themeBtn}
              >
                Сменить тему
              </button>
            </li>
            {visibleNavLinks}
          </ul>
        )}
      </nav>
      <SearchForm />
    </header>
  );
}

export default Header;
