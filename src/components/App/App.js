import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesList from '../../constants/moviesList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as mainApi from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const navigate = useNavigate();

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [formErrorMessage, setFormErrorMessage] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});

  function handleBurgerMenuOpen(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleLogin(formValue) {
    const { email, password } = formValue;
    mainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          handleGetUser();
          navigate('/movies', {replace: true});
          setLoggedIn(true);
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
        // closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleGetUser() {
    mainApi.checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
                handleRegister={handleRegister}
                errorMessage={formErrorMessage}
              />}
            />
            <Route path="/signin" element={
              <Login
                handleLogin={handleLogin}
                errorMessage={formErrorMessage}
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
              />}
            />
            <Route path="/movies" element={
              <Movies
                movies={moviesList}
                onBurgerButtonClick={handleBurgerMenuOpen}
                onBurgerLinkClick={handleBurgerMenuOpen}
                isBurgerMenuOpen = {isBurgerMenuOpen}
              />}
            />
            <Route path="/saved-movies" element={
              <SavedMovies
                movies={moviesList}
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
