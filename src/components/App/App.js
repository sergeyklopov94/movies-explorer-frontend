import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as mainApi from '../../utils/MainApi.js';
import * as moviesApi from '../../utils/MoviesApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { filterMovies } from '../../utils/Filtration';

function App() {

  const navigate = useNavigate();

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [formErrorMessage, setFormErrorMessage] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  const [filteredmovies, setFilteredMovies] = React.useState([]);
  const [searchString, setSearchString] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function handleBurgerMenuOpen(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleLogin(formValue) {
    const { email, password } = formValue;
    mainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          handleGetUser();
          setLoggedIn(true);
          navigate('/movies', {replace: true});
        }
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage(err);
      });
  }

  function handleRegister(formValue) {
    const { name, password, email } = formValue;
    mainApi.register(name, password, email)
      .then((res) => {
        handleLogin(formValue);
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage(err);
      });
  }

  function handleLogout() {
    mainApi.logout()
      .then((res) => {
        setLoggedIn(false);
        navigate('/', {replace: true});
        localStorage.removeItem("movies");
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage(err);
    });
  }

  function handleUpdateUser({ name, email }) {
    mainApi.editUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage(err);
      });
  }

  function handleGetUser() {
    mainApi.checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          console.log(loggedIn);
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        console.log(loggedIn);
      });
  }

  function handleGetAllMovies() {
    setIsLoading(true);
    if (searchString === "") {
      setErrorMessage("Нужно ввести ключевое слово");
    } else {
      setErrorMessage("");
      moviesApi.getAllMovies()
        .then((res) => {
          if (res) {
            console.log(filterMovies(res, searchString));
            localStorage.setItem('movies', res);
            localStorage.setItem('searchString', searchString);
            // localStorage.setItem((movies, searchString));
            setFilteredMovies(filterMovies(res, searchString));
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  React.useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
            <Route path="/signup" element={
              <Register
                loggedIn={loggedIn}
                handleRegister={handleRegister}
                errorMessage={formErrorMessage}
                setFormErrorMessage={setFormErrorMessage}
              />}
            />
            <Route path="/signin" element={
              <Login
                loggedIn={loggedIn}
                handleLogin={handleLogin}
                errorMessage={formErrorMessage}
                setFormErrorMessage={setFormErrorMessage}
              />}
            />
            <Route path="/profile" element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onBurgerButtonClick={handleBurgerMenuOpen}
                isBurgerMenuOpen = {isBurgerMenuOpen}
                handleLogout={handleLogout}
                handleUpdateUser={handleUpdateUser}
                errorMessage={formErrorMessage}
                setFormErrorMessage={setFormErrorMessage}
              />}
            />
            <Route path="/movies" element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                movies={filteredmovies}
                onBurgerButtonClick={handleBurgerMenuOpen}
                onBurgerLinkClick={handleBurgerMenuOpen}
                isBurgerMenuOpen = {isBurgerMenuOpen}
                onSearchButtonSubmit={handleGetAllMovies}
                searchString={searchString}
                setSearchString={setSearchString}
                errorMessage={errorMessage}
                isLoading={isLoading}
              />}
            />
            <Route path="/saved-movies" element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                onBurgerButtonClick={handleBurgerMenuOpen}
                onBurgerLinkClick={handleBurgerMenuOpen}
                isBurgerMenuOpen = {isBurgerMenuOpen}
              />}
            />
            <Route path="/" element={
              <Main
                loggedIn={loggedIn}
              />}
            />
            <Route path="/*" element={
              <PageNotFound/>}
            />
          </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
