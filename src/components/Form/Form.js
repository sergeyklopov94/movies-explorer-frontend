import { useLocation } from 'react-router-dom';
import './Form.css';

function Form({ children, isEdit, buttonText, handleSubmit, errorMessage, handleClick }) {

  const location = useLocation();

  const formClassName = (location.pathname === "/profile") ?
  ( "form form_type_profile" ) :
  ( "form");

  const buttonClassName = (location.pathname === "/profile" && !isEdit) ?
  ( "form__button form__button_invisible" ) :
  ( "form__button");

  return (
    <form
    className={ formClassName }
    onSubmit={ handleSubmit }>
      <div className="form__inputs-list">
        {children}
      </div>
      <span className="form__error-message">{ errorMessage }</span>
      <button
        className={buttonClassName}
        type="submit"
        onClick={handleClick}>
          {buttonText}
      </button>
    </form>
  );
}

export default Form;
