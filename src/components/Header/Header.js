import './Header.css';
import headerLogo from '../../images/header_logo.png';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </Link>
      <Navigation/>
    </header>
  );
}

export default Header;
