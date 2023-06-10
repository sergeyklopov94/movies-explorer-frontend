import { useLocation } from 'react-router-dom';
import './Form.css';

function Form({ children, isEdit, buttonText }) {

  const location = useLocation();

  const formClassName = (location.pathname === "/profile") ?
  ( "form form_type_profile" ) :
  ( "form");

  const buttonClassName = (location.pathname === "/profile" && !isEdit) ?
  ( "form__button form__button_invisible" ) :
  ( "form__button");

  return (
    <form className={ formClassName }>
      <div className="form__inputs-list">
        {children}
      </div>
      <button className={buttonClassName} type="submit">{buttonText}</button>
    </form>
  );
}

export default Form;
