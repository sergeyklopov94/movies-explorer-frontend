import Form from '../Form/Form';
import FormSignature from '../FormSignature/FormSignature';
import Greeting from '../Greeting/Greeting';
import './Register.css';

function Register() {
  return (
    <main className="register">
      <div className="register__container">
        <Greeting text="Добро пожаловать!"/>
        <Form buttonText="Зарегистрироваться">
          <label className="form__input-label form__input-label_type_auth">
            Имя
          </label>
          <input className="form__input"
            type="text"
            id="name-input"
            name="name"
            placeholder="Введите имя..."
            required>
          </input>
          <label className="form__input-label form__input-label_type_auth">
            E-mail
          </label>
          <input className="form__input"
            type="email"
            id="email-input"
            name="email"
            placeholder="Введите e-mail..."
            required>
          </input>
          <label className="form__input-label form__input-label_type_auth">
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
          text="Уже зарегистрированы?"
          path="/signin"
          buttonText="Войти"/>
      </div>
    </main>
  );
}

export default Register;
