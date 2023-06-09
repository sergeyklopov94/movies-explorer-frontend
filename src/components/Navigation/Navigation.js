import './Navigation.css';
import profileIcon from '../../images/icon-profile-button.svg';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  return (
    <nav className="navigation">
      {location.pathname === '/' && (
      <ul className="navigation-container">
        <Link to="/signup" className="navigation_link">
          <button className="navigation__button navigation__button_theme_dark">Регистрация</button>
        </Link>
        <Link to="/signin" className="navigation_link">
          <button className="navigation__button navigation__button_theme_dark navigation__button_type_login">Войти</button>
        </Link>
      </ul>
      )}
      {location.pathname === '/movies' && (
        <ul className="navigation-container">
          <Link to="/movies" className="navigation_link">
            <button className="navigation__button navigation__button_active navigation__button_theme_light">Фильмы</button>
          </Link>
          <Link to="/saved-movies" className="navigation_link navigation_link_type_saved">
            <button className="navigation__button navigation__button_theme_light">Сохранённые фильмы</button>
          </Link>
          <Link to="/profile" className="navigation_link">
            <button className="navigation__button navigation__button_type_profile">Аккаунт
              <div className="navigation__button-icon-container">
                <img className="navigation__button-icon" src={profileIcon} alt="Иконка профиля"/>
              </div>
            </button>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
