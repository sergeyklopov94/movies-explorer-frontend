import './Navigation.css';
import profileIcon from '../../images/icon-profile-button.svg';
import { Routes, Route, Link } from 'react-router-dom';

function Navigation() {
  return (
      <Routes>
        <Route path="/" element={
          <nav className="navigation">
            <li>
              <Link to="/signup">
                <button className="navigation__button navigation__button_theme_dark">Регистрация</button>
              </Link>
              <Link to="/signin">
                <button className="navigation__button navigation__button_theme_dark navigation__button_type_login">Войти</button>
              </Link>
            </li>
          </nav>
        }
        />
        <Route path="/profile" element={
          <nav className="navigation navigation__type_profile">
            <li>
              <Link to="/movies">
                <button className="navigation__button navigation__button_theme_light">Фильмы</button>
              </Link>
              <Link to="/saved-movies">
                <button className="navigation__button navigation__button_theme_light">Сохранённые фильмы</button>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <button className="navigation__button navigation__button_type_profile">Аккаунт
                  <div className="navigation__button-icon-container">
                    <img className="navigation__button-icon" src={profileIcon} alt="Иконка профиля"/>
                  </div>
                </button>
              </Link>
            </li>
          </nav>
        }
        />
        <Route path="/movies" element={
          <nav className="navigation navigation__type_profile">
            <li>
              <Link to="/movies">
                <button className="navigation__button navigation__button_theme_light">Фильмы</button>
              </Link>
              <Link to="/saved-movies">
                <button className="navigation__button navigation__button_theme_light">Сохранённые фильмы</button>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <button className="navigation__button navigation__button_type_profile">Аккаунт
                  <div className="navigation__button-icon-container">
                    <img className="navigation__button-icon" src={profileIcon} alt="Иконка профиля" />
                  </div>
                </button>
              </Link>
            </li>
          </nav>
        }
        />
        <Route path="/saved-movies" element={
          <nav className="navigation navigation__type_profile">
            <li>
              <Link to="/movies">
                <button className="navigation__button navigation__button_theme_light">Фильмы</button>
              </Link>
              <Link to="/saved-movies">
                <button className="navigation__button navigation__button_theme_light">Сохранённые фильмы</button>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <button className="navigation__button navigation__button_type_profile">Аккаунт
                  <div className="navigation__button-icon-container">
                    <img className="navigation__button-icon" src={profileIcon} alt="Иконка профиля" />
                  </div>
                </button>
              </Link>
            </li>
          </nav>
        }
        />
      </Routes>
  );
}

export default Navigation;
