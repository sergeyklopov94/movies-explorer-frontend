import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({ color }) {
  return (
    <header className={`header header_theme_${color}`}>
      <Link to="/" className="header_link">
        <img className="header__logo" src={headerLogo} alt="Зеленый логотип с буквой S"/>
      </Link>
      <Navigation/>
    </header>
  );
}

export default Header;
