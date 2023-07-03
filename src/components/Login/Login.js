import React from 'react';
import Form from '../Form/Form';
import FormSignature from '../FormSignature/FormSignature';
import Greeting from '../Greeting/Greeting';
import './Login.css';
import useFormWithValidation from "../../hooks/useValidation";
import { Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function Login({
  handleLogin,
  errorMessage,
  setFormErrorMessage,
  loggedIn,
  isLoading }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  }

  React.useEffect(() => {
    setFormErrorMessage("");
  }, [setFormErrorMessage]);

  if (loggedIn) {
    return <Navigate to="/" replace="true" />
  } else {
    return (
      <main className="login">
        {
        (isLoading === true) && (<Preloader />)
        }
        {
        (isLoading === false) && (
        <div className="login__container">
          <Greeting text="Рады видеть!"/>
          <Form
            buttonText="Войти"
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
            setFormErrorMessage={setFormErrorMessage}
            isValid={isValid}>
            <label className="form__input-label form__input-label_type_auth">
              E-mail
              <input className={`form__input form__input_type_auth ${errors.email ? "form__input_type_error" : ""}`}
                type="email"
                id="email-input"
                name="email"
                placeholder="Введите e-mail..."
                value={values.email || ""}
                onChange={handleChange}
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
                placeholder="Введите пароль..."
                minLength="6"
                value={values.password || ""}
                onChange={handleChange}
                required>
              </input>
              <span className="form__info-error">{errors.password || ""}</span>
            </label>
          </Form>
          <FormSignature
            text="Ещё не зарегистрированы?"
            path="/signup"
            buttonText="Регистрация"/>
        </div>
        )}
      </main>
    );
  }
}

export default Login;
