import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton';

function Header({ color, loggedIn, onBurgerButtonClick, isBurgerMenuOpen }) {
  return (
    <header className={`header header_theme_${color}`}>
      <Logo/>
      <Navigation loggedIn={loggedIn}/>
      <BurgerMenuButton
        onBurgerButtonClick={onBurgerButtonClick}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
    </header>
  );
}

export default Header;
