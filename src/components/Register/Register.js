import React from 'react';
import Form from '../Form/Form';
import FormSignature from '../FormSignature/FormSignature';
import Greeting from '../Greeting/Greeting';
import './Register.css';

function Register({ handleRegister, errorMessage }) {

  const [formValue, setFormValue] = React.useState({ name: '', email: '', password: '' });

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormValue({...formValue, [name]: value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(formValue);
  }

  return (
    <main className="register">
      <div className="register__container">
        <Greeting text="Добро пожаловать!"/>
        <Form
          buttonText="Зарегистрироваться"
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}>
          <label className="form__input-label form__input-label_type_auth">
            Имя
          </label>
          <input className="form__input"
            type="text"
            id="name-input"
            name="name"
            placeholder="Введите имя..."
            onChange={handleChange}
            value={formValue.name}
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
            onChange={handleChange}
            value={formValue.email}
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
            value={formValue.password}
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
