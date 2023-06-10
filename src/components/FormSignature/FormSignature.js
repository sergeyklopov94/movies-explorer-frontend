import { Link } from 'react-router-dom';
import './FormSignature.css';

function FormSignature({ text, buttonText }) {
  return (
    <div className="form-signature">
      <p className="form-signature__text">{ text }</p>
      <Link to="/signin" className="form-signature__button">
        { buttonText }
      </Link>
    </div>
  );
}

export default FormSignature;
