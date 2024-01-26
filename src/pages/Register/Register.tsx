import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';

import cls from './Register.module.css';

function Register() {
  return (
    <div className={cls.register}>
      <AuthForm title="Регистрация" buttonText="Зарегистрироваться" />
      <Link to="/login" className={cls.link}>
        Вход
      </Link>
    </div>
  );
}

export default Register;
