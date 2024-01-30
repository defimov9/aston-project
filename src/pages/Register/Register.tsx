import { Link, Navigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import cls from './Register.module.css';
import { useAuthActions } from '../../hooks/useAuthActions';

function Register() {
  const { user, register } = useAuthActions();

  if (user) {
    return <Navigate to="/" />;
  }

  const handleSubmitForm = (email: string, password: string) => {
    register(email, password);
  };

  return (
    <div className={cls.register}>
      <AuthForm
        title="Регистрация"
        buttonText="Зарегистрироваться"
        handleSubmitForm={handleSubmitForm}
      />
      <Link to="/login" className={cls.link}>
        Вход
      </Link>
    </div>
  );
}

export default Register;
