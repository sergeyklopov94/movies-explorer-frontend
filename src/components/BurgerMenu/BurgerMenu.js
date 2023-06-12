import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';
import ProfileButton from '../ProfileButton/ProfileButton';

function BurgerMenu({ isBurgerMenuOpen, onBurgerLinkClick }) {
  return (
    <div className={`burger-menu ${isBurgerMenuOpen ? "burger-menu_opened" : ""}`}>
      <div className={`burger-menu__container ${isBurgerMenuOpen ? "burger-menu__container_opened" : ""}`}>
        <ul className="burger-menu__list">
          <NavLink to="/" className={({ isActive }) => `burger-menu__link ${isActive && 'burger-menu__link_active'}`}
            onClick={onBurgerLinkClick}>
            Главная
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => `burger-menu__link ${isActive && 'burger-menu__link_active'}`}
            onClick={onBurgerLinkClick}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={({ isActive }) => `burger-menu__link ${isActive && 'burger-menu__link_active'}`}
            onClick={onBurgerLinkClick}>
            Сохранённые фильмы
          </NavLink>
        </ul>
        <NavLink to="/profile" className="burger-menu__link" onClick={onBurgerLinkClick}>
          <ProfileButton/>
        </NavLink>
      </div>
    </div>
  );
}

export default BurgerMenu;
