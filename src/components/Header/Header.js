import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header({ color }) {
  return (
    <header className={`header header_theme_${color}`}>
      <Logo/>
      <Navigation/>
    </header>
  );
}

export default Header;
