import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';

function Navigation() {

  const location = useLocation();

  return (
    <nav className="navigation">
      {location.pathname === "/" && (
      <ul className="navigation-container">
        <li>
          <Link to="/signup" className="navigation__button navigation__button_theme_dark">
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/signin" className="navigation__button navigation__button_theme_dark navigation__button_type_login">
            Войти
          </Link>
        </li>
      </ul>
      )}
      {location.pathname === "/profile" && (
        <ul className="navigation-container navigation-container_dynamic">
          <li>
            <Link to="/movies" className="navigation__button navigation__button_theme_light">
              Фильмы
            </Link>
          </li>
          <li className="navigation_link-container_type_saved">
            <Link to="/saved-movies" className="navigation__button navigation__button_theme_light">
              Сохранённые фильмы
            </Link>
          </li>
          <li>
            <ProfileButton/>
          </li>
        </ul>
      )}
      {location.pathname === "/movies" && (
        <ul className="navigation-container navigation-container_dynamic">
          <li>
            <Link to="/movies" className="navigation__button navigation__button_active navigation__button_theme_light">
              Фильмы
            </Link>
          </li>
          <li className="navigation_link-container_type_saved">
            <Link to="/saved-movies" className="navigation__button navigation__button_theme_light">
              Сохранённые фильмы
            </Link>
          </li>
          <li>
            <ProfileButton/>
          </li>
        </ul>
      )}
      {location.pathname === "/saved-movies" && (
        <ul className="navigation-container navigation-container_dynamic">
          <li>
            <Link to="/movies" className="navigation__button navigation__button_theme_light">
              Фильмы
            </Link>
          </li>
          <li className="navigation_link-container_type_saved">
            <Link to="/saved-movies" className="navigation__button navigation__button_active navigation__button_theme_light">
              Сохранённые фильмы
            </Link>
          </li>
          <li>
            <ProfileButton/>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
