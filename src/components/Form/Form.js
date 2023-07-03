import { useLocation } from 'react-router-dom';
import './Form.css';
import React from 'react';

function Form({
  children,
  isEdit,
  buttonText,
  handleSubmit,
  errorMessage,
  handleClick,
  isValid,
  formSuccessMessage
}) {

  const location = useLocation();

  const formClassName = (location.pathname === "/profile") ?
  ( "form form_type_profile" ) :
  ( "form");

  const buttonClassName = (location.pathname === "/profile" && !isEdit) ?
  ( "form__button_invisible" ) :
  ( "");

  return (
    <form
      className={ formClassName }
      onSubmit={ handleSubmit }>
      <div className="form__inputs-list">
        {children}
      </div>
      <span className={`form__message ${(formSuccessMessage === "") ? "form__message_type_error" : "form__message_type_success"}`}>{ errorMessage || formSuccessMessage }</span>
      <button
        className={`form__button ${buttonClassName} ${!isValid ? "form__button_disable" : ""}`}
        type="submit"
        onClick={handleClick}>
          {buttonText}
      </button>
    </form>
  );
}

export default Form;
