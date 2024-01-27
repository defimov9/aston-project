import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import cls from './Header.module.css';
import classNames from '../../utils/classNames';

function Header() {
  const isLinkActive = ({ isActive }: { isActive: boolean }) =>
    classNames(cls.link, { [cls.activeLink]: isActive });

  return (
    <header className={cls.header}>
      <nav className={cls.navbar}>
        <NavLink to="/">
          <Logo />
        </NavLink>

        <ul className={cls.authLinks}>
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
