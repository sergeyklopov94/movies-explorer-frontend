import './Form.css';

function Form({ children, buttonText }) {
  return (
    <form className="form">
      <div className="form__inputs-list">
        {children}
      </div>
      <button className="form__button" type="submit">{buttonText}</button>
    </form>
  );
}

export default Form;
