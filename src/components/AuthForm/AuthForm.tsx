import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import cls from './AuthForm.module.css';

interface FormData {
  email: string;
  password: string;
}

interface Props {
  title: string;
  buttonText: string;
  handleSubmitForm: (email: string, password: string) => void;
}

function AuthForm({ title, buttonText, handleSubmitForm }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = ({ email, password }: FormData) => {
    handleSubmitForm(email, password);
  };

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={cls.title}>{title}</h2>

      <div className={cls.inputContainer}>
        <label className={cls.label} htmlFor="email">
          Email
          <input
            className={cls.input}
            id="email"
            type="email"
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Неверный адрес электронной почты',
              },
            })}
          />
        </label>
        {errors.email && <p className={cls.error}>{errors.email.message}</p>}
      </div>

      <div className={cls.inputContainer}>
        <label className={cls.label} htmlFor="password">
          Пароль
          <input
            className={cls.input}
            id="password"
            type="password"
            {...register('password', {
              required: 'Пароль обязателен',
              minLength: {
                value: 6,
                message: 'Пароль должен быть не менее 6 символов',
              },
            })}
          />
        </label>
        {errors.password && (
          <p className={cls.error}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className={cls.submitBtn}>
        {buttonText}
      </button>
    </form>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
};

export default AuthForm;
