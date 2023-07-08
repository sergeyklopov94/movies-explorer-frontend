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
import { filterMovies, filterShortMovies } from '../../utils/Filtration';
import { useLocation } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [formErrorMessage, setFormErrorMessage] = React.useState("");
  const [formSuccessMessage, setFormSuccessMessage] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [allMoviesError, setAllMoviesError] = React.useState(false);

  function handleBurgerMenuOpen(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleLogin(formValue) {
    const { email, password } = formValue;
    setIsLoading(true);
    setAllMoviesError(false);
    mainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          handleGetUser();
          setFormSuccessMessage("Вы успешно авторизовались!");
          setLoggedIn(true);
          navigate('/movies', {replace: true});
        }
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister(formValue) {
    setIsLoading(true);
    const { name, password, email } = formValue;
    mainApi.register(name, password, email)
      .then((res) => {
        setFormSuccessMessage("Вы успешно зарегистрировались!");
        handleLogin(formValue);
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    setIsLoading(true);
    mainApi.logout()
      .then((res) => {
        setLoggedIn(false);
        navigate('/', {replace: true});
        setFilteredMovies([]);
        localStorage.removeItem("movies");
        localStorage.removeItem("savedMovies");
        localStorage.removeItem("filteredMovies");
        localStorage.removeItem("filteredShortMovies");
        localStorage.removeItem("searchString");
        localStorage.removeItem("searchCheckBoxState");
        localStorage.removeItem("savedSearchString");
        localStorage.removeItem("savedSearchCheckBoxState");
        localStorage.setItem("loggedIn", false);
        setErrorMessage("");
        setFormErrorMessage("");
        setFormSuccessMessage("");
        setAllMoviesError(false);
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    mainApi.editUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
        setFormSuccessMessage("Профиль успешно отредактирован!");
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleGetUser() {
    mainApi.checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
          localStorage.setItem("loggedIn", true);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      });
  }

  async function getAllMovies() {
    setIsLoading(true);
    setAllMoviesError(false);
    await moviesApi.getAllMovies()
    .then((res) => {
      if (res) {
        localStorage.setItem("movies", JSON.stringify(res));
      }
    })
    .catch((err) => {
      setAllMoviesError(true);
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  async function getAllSavedMovies() {
    setIsLoading(true);
    setAllMoviesError(false);
    await mainApi.getLikedMovies()
      .then((res) => {
        if (res) {
          localStorage.setItem("savedMovies", JSON.stringify(res));
          setSavedMovies(res);
        }
      })
      .catch((err) => {
        setAllMoviesError(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function handleSetMovies(value, checked) {
    if (value.searchString === "" ) {
      setErrorMessage("Нужно ввести ключевое слово");
    } else {
      setErrorMessage("");
      localStorage.setItem("searchString", value.searchString);
      localStorage.setItem("searchCheckBoxState", checked.searchCheckBoxState);
      if (localStorage.getItem("movies") === null) {
        await getAllMovies();
      }
      const filteredMovies = handleGetFilteredMovies(JSON.parse(localStorage.getItem("movies")));
      setFilteredMovies(filteredMovies);
    }
  }

  async function handleSetSavedMovies(value, checked) {
    localStorage.setItem("savedSearchString", value.searchString);
    localStorage.setItem("savedSearchCheckBoxState", checked.searchCheckBoxState);
    const filteredMovies = handleGetFilteredMovies(JSON.parse(localStorage.getItem("savedMovies")));
    setSavedMovies(filteredMovies);
  }

  function handleGetFilteredMovies(movies) {
    let searchString = localStorage.getItem("searchString");
    let searchCheckBoxState = JSON.parse(localStorage.getItem("searchCheckBoxState"));
    if (location.pathname === "/saved-movies"){
      searchString = localStorage.getItem("savedSearchString");
      searchCheckBoxState = JSON.parse(localStorage.getItem("savedSearchCheckBoxState"));
    }
    localStorage.setItem("filteredMovies", JSON.stringify(filterMovies(movies, searchString)));
    const filteredMovies = JSON.parse(localStorage.getItem("filteredMovies"));
    if (searchCheckBoxState) {
      localStorage.setItem("filteredShortMovies", JSON.stringify(filterShortMovies(filteredMovies, searchCheckBoxState)));
      const filteredShortMovies =  JSON.parse(localStorage.getItem("filteredShortMovies"));
      return filteredShortMovies;
    } else return filteredMovies;
  }

  function handleMovieLike(movie, isLiked, setSelectedMovie) {
    if (isLiked || location.pathname === "/saved-movies") {
      deleteMovie(movie);
      setSelectedMovie(false);
    } else {
      likeMovie(movie);
      setSelectedMovie(true);
    }
  }

  async function likeMovie(movie) {
    await mainApi.likeMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function deleteMovie(movie) {
    const savedMovie = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movie.id || savedMovie.movieId === movie.movieId
    );
    await mainApi.deleteMovie(savedMovie._id)
      .then((res) => {
        const newSavedMovies = savedMovies.filter((savedMovie) => savedMovie._id !== movie._id);
        setSavedMovies(
          newSavedMovies
        );
        localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
        console.log(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSavedMovies(movie, setSelectedMovie) {
    let allSavedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    const savedMovie = allSavedMovies.find(
      (savedMovie) => savedMovie.movieId === movie.id || savedMovie.movieId === movie.movieId
    );
    if (savedMovie)
    setSelectedMovie(movie);
  }

  React.useEffect(() => {
    handleGetUser();
    getAllSavedMovies();
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
                isLoading={isLoading}
              />}
            />
            <Route path="/signin" element={
              <Login
                loggedIn={loggedIn}
                handleLogin={handleLogin}
                errorMessage={formErrorMessage}
                setFormErrorMessage={setFormErrorMessage}
                isLoading={isLoading}
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
                formSuccessMessage={formSuccessMessage}
                setFormSuccessMessage={setFormSuccessMessage}
                isLoading={isLoading}
              />}
            />
            <Route path="/movies" element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                movies={filteredMovies}
                onBurgerButtonClick={handleBurgerMenuOpen}
                onBurgerLinkClick={handleBurgerMenuOpen}
                isBurgerMenuOpen = {isBurgerMenuOpen}
                onSearchButtonSubmit={handleSetMovies}
                errorMessage={errorMessage}
                isLoading={isLoading}
                allMoviesError={allMoviesError}
                onMovieLike={handleMovieLike}
                handleGetFilteredMovies={handleGetFilteredMovies}
                setFilteredMovies={setFilteredMovies}
                getSavedMovies={getSavedMovies}
              />}
            />
            <Route path="/saved-movies" element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                onBurgerButtonClick={handleBurgerMenuOpen}
                onBurgerLinkClick={handleBurgerMenuOpen}
                isBurgerMenuOpen = {isBurgerMenuOpen}
                onSearchButtonSubmit={handleSetSavedMovies}
                isLoading={isLoading}
                allMoviesError={allMoviesError}
                savedMovies={savedMovies}
                getAllSavedMovies={getAllSavedMovies}
                setSavedMovies={setSavedMovies}
                handleGetFilteredMovies={handleGetFilteredMovies}
                onMovieLike={handleMovieLike}
              />}
            />
            <Route path="/" element={
              <Main
                loggedIn={loggedIn}
                onBurgerButtonClick={handleBurgerMenuOpen}
                onBurgerLinkClick={handleBurgerMenuOpen}
                isBurgerMenuOpen = {isBurgerMenuOpen}
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
