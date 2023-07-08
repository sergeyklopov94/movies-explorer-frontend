import './BurgerMenuButton.css';

function BurgerMenuButton({ onBurgerButtonClick, isBurgerMenuOpen }) {

  const burgerMenuButtonClassName = (!JSON.parse(localStorage.getItem("loggedIn"))) ?
  ("burger-menu-button burger-menu-button_invisible"):
  (isBurgerMenuOpen)?
  ( "burger-menu-button burger-menu-button_type_x" ) :
  ( "burger-menu-button burger-menu-button_type_lines");

  return (
    <button
      className={burgerMenuButtonClassName}
      onClick={onBurgerButtonClick}>
    </button>
  );
}

export default BurgerMenuButton;
