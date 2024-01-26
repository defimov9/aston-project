import cls from './AuthForm.module.css';

interface Props {
  title: string;
  buttonText: string;
}

function AuthForm({ title, buttonText }: Props) {
  return (
    <form className={cls.form}>
      <h2 className={cls.title}>{title}</h2>
      <div className={cls.intputContainer}>
        <label className={cls.label} htmlFor="email">
          Email
          <input className={cls.input} id="email" />
        </label>
        <p className={cls.error}>Error</p>
      </div>
      <div className={cls.inputContainer}>
        <label className={cls.label} htmlFor="email">
          Пароль
          <input className={cls.input} id="email" />
        </label>
        <p className={cls.error}>Error</p>
      </div>
      <button type="submit" className={cls.submitBtn}>
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
