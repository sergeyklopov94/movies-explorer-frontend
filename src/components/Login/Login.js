import Form from '../Form/Form';
import FormSignature from '../FormSignature/FormSignature';
import Greeting from '../Greeting/Greeting';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Greeting text="Рады видеть!"/>
        <Form buttonText="Войти">
          <label for="name" className="form__input-label">
            E-mail
          </label>
          <input className="form__input"
            type="email"
            id="email-input"
            name="email"
            placeholder="Введите e-mail..."
            required>
          </input>
          <label for="name" className="form__input-label">
            Пароль
          </label>
          <input className="form__input"
            type="password"
            id="password-input"
            name="password"
            placeholder="Введите пароль..."
            required>
          </input>
        </Form>
        <FormSignature
          text="Ещё не зарегистрированы?"
          path="/signup"
          buttonText="Регистрация"/>
      </div>
    </div>
  );
}

export default Login;