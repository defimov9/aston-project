import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import cls from './Login.module.css';

function Login() {
  return (
    <div className={cls.login}>
      <AuthForm title="Вход" buttonText="Войти" />
      <Link to="/register" className={cls.link}>
        Регистрация
      </Link>
    </div>
  );
}

export default Login;
