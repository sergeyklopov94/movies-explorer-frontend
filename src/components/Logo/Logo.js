import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Зеленый логотип с буквой S"/>
    </Link>
  );
}

export default Logo;
