import React from 'react';
import Form from '../Form/Form';
import FormSignature from '../FormSignature/FormSignature';
import Greeting from '../Greeting/Greeting';
import './Register.css';
import useFormWithValidation from "../../hooks/useValidation";
import { Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function Register({
  handleRegister,
  errorMessage,
  setFormErrorMessage,
  loggedIn,
  formSuccessMessage,
  setFormSuccessMessage,
  isLoading }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values);
  }

  if (loggedIn) {
    return <Navigate to="/" replace="true" />
  } else {
    return (
      <main className="register">
        {
        (isLoading === true) && (<Preloader />)
        }
        {
        (isLoading === false) && (
        <div className="register__container">
          <Greeting text="Добро пожаловать!"/>
          <Form
            buttonText="Зарегистрироваться"
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
            setFormErrorMessage={setFormErrorMessage}
            formSuccessMessage={formSuccessMessage}
            setFormSuccessMessage={setFormSuccessMessage}
            isValid={isValid}>
            <label className="form__input-label form__input-label_type_auth">
              Имя
              <input className={`form__input form__input_type_auth ${errors.name ? "form__input_type_error" : ""}`}
                type="text"
                id="name-input"
                name="name"
                placeholder="Введите имя..."
                onChange={handleChange}
                value={values.name || ""}
                required>
              </input>
              <span className="form__info-error">{errors.name || ""}</span>
            </label>
            <label className="form__input-label form__input-label_type_auth">
              E-mail
              <input className={`form__input form__input_type_auth ${errors.email ? "form__input_type_error" : ""}`}
                type="email"
                id="email-input"
                name="email"
                placeholder="Введите e-mail..."
                onChange={handleChange}
                value={values.email || ""}
                required>
              </input>
              <span className="form__info-error">{errors.email || ""}</span>
            </label>
            <label className="form__input-label form__input-label_type_auth">
              Пароль
              <input className={`form__input form__input_type_auth ${errors.password ? "form__input_type_error" : ""}`}
                type="password"
                id="password-input"
                name="password"
                minLength="6"
                placeholder="Введите пароль..."
                onChange={handleChange}
                value={values.password || ""}
                required>
              </input>
              <span className="form__info-error">{errors.password || ""}</span>
            </label>
          </Form>
          <FormSignature
            text="Уже зарегистрированы?"
            path="/signin"
            buttonText="Войти"/>
        </div>
        )}
      </main>
    );
  }
}

export default Register;
