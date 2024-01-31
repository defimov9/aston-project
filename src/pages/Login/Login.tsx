import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import cls from './Login.module.css';
import { useAuthActions } from '../../hooks/useAuthActions';

function Login() {
  const { login } = useAuthActions();

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
