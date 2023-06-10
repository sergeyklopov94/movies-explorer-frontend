import Form from '../Form/Form';
import FormSignature from '../FormSignature/FormSignature';
import Greeting from '../Greeting/Greeting';
import './Register.css';

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Greeting text="Добро пожаловать!"/>
        <Form buttonText="Зарегистрироваться">
          <label for="name" className="form__input-label">
            Имя
          </label>
          <input className="form__input"
            type="text"
            id="name-input"
            name="name"
            placeholder="Введите имя..."
            required>
          </input>
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
        <FormSignature text="Уже зарегистрированы?" buttonText="Войти"/>
      </div>
    </div>
  );
}

export default Register;
