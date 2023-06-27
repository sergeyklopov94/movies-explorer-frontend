import React from 'react';
import Form from '../Form/Form';
import FormSignature from '../FormSignature/FormSignature';
import Greeting from '../Greeting/Greeting';
import './Login.css';

function Login({ handleLogin, errorMessage }) {

  const [formValue, setFormValue] = React.useState({email: '', password: ''});

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormValue({...formValue, [name]: value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(formValue);
  }

  return (
    <main className="login">
      <div className="login__container">
        <Greeting text="Рады видеть!"/>
        <Form
          buttonText="Войти"
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}>
          <label className="form__input-label form__input-label_type_auth">
            E-mail
          </label>
          <input className="form__input"
            type="email"
            id="email-input"
            name="email"
            placeholder="Введите e-mail..."
            onChange={handleChange}
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
            onChange={handleChange}
            required>
          </input>
        </Form>
        <FormSignature
          text="Ещё не зарегистрированы?"
          path="/signup"
          buttonText="Регистрация"/>
      </div>
    </main>
  );
}

export default Login;
