import { Link } from 'react-router-dom';
import cls from './NotFound.module.css';

function NotFound() {
  return (
    <div className={cls.notFound}>
      <h1 className={cls.title}>404</h1>
      <h2>Страница не найдена</h2>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default NotFound;
