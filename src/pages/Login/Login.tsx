import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import cls from './Login.module.css';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleSubmitForm = (email: string, password: string) => {
    login(email, password);
  };

  return (
    <div className={cls.login}>
      <AuthForm
        title="Вход"
        buttonText="Войти"
        handleSubmitForm={handleSubmitForm}
      />
      <Link to="/register" className={cls.link}>
        Регистрация
      </Link>
    </div>
  );
}

export default Login;
