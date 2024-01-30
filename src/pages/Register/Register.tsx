import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import cls from './Register.module.css';
import { useAuth } from '../../hooks/useAuth';

function Register() {
  const { user, register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

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
