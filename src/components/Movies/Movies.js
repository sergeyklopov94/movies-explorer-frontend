import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import useFormWithValidation from "../../hooks/useValidation";
import {
  SIZE_L,
  SIZE_S,
  DISPLAYED_MOVIES_SIZE_L,
  DISPLAYED_MOVIES_SIZE_M,
  DISPLAYED_MOVIES_SIZE_S,
  ADDITIONAL_MOVIES_SIZE_L,
  ADDITIONAL_MOVIES_SIZE_M,
  ADDITIONAL_MOVIES_SIZE_S,
 } from '../../constants/Constants';

function Movies({
  movies,
  isBurgerMenuOpen,
  onBurgerButtonClick,
  onBurgerLinkClick,
  onSearchButtonSubmit,
  errorMessage,
  isLoading,
  allMoviesError,
  handleGetShortMovies,
  onMovieLike,
  handleGetFilteredMovies,
  setFilteredMovies,
  getSavedMovies
 }) {

  const { values, checkes, handleChange, resetForm } = useFormWithValidation();

  const [windowSize, setWindowSize] = React.useState(SIZE_L);
  const [displayedMovies, setDisplayedMovies] = React.useState(DISPLAYED_MOVIES_SIZE_L);
  const [additionalMovies, setAdditionalMovies] = React.useState(ADDITIONAL_MOVIES_SIZE_L);

  React.useEffect(() => {
    const searchString = localStorage.getItem("searchString");
    const searchCheckBoxState = localStorage.getItem("searchCheckBoxState");
    if (searchString === null || searchString === "undefined")
      localStorage.setItem("searchString", "");
    if (searchCheckBoxState === null || searchCheckBoxState === "undefined"){
      localStorage.setItem("searchCheckBoxState", false);
    }
    resetForm(
    { searchString: localStorage.getItem("searchString") },
    { searchCheckBoxState: JSON.parse(localStorage.getItem("searchCheckBoxState")) },
    {},
    false);
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("movies") !== null)
      setFilteredMovies(handleGetFilteredMovies(JSON.parse(localStorage.getItem("movies"))));
  }, []);

  React.useEffect(() => {
    setWindowSize(window.screen.width);
  }, []);

  React.useEffect(() => {
    let moviesToDisplay = 0;
    if (windowSize >= SIZE_L) {
      moviesToDisplay = DISPLAYED_MOVIES_SIZE_L;
      setAdditionalMovies(ADDITIONAL_MOVIES_SIZE_L);
    } else if (windowSize >= SIZE_S) {
      moviesToDisplay = DISPLAYED_MOVIES_SIZE_M;
      setAdditionalMovies(ADDITIONAL_MOVIES_SIZE_M);
    } else if (windowSize < SIZE_S) {
      moviesToDisplay = DISPLAYED_MOVIES_SIZE_S;
      setAdditionalMovies(ADDITIONAL_MOVIES_SIZE_S);
    }
    setDisplayedMovies(moviesToDisplay);
  }, [windowSize]);

  return (
    <>
      <BurgerMenu
        isBurgerMenuOpen={isBurgerMenuOpen}
        onBurgerLinkClick={onBurgerLinkClick}
      />
      <Header
        color="light"
        onBurgerButtonClick={onBurgerButtonClick}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
      <main className="movies">
        <SearchForm
          handleSearchButtonSubmit={onSearchButtonSubmit}
          errorMessage={errorMessage}
          handleGetShortMovies={handleGetShortMovies}
          handleGetFilteredMovies={handleGetFilteredMovies}
          setFilteredMovies={setFilteredMovies}
          values={values}
          checkes={checkes}
          handleChange={handleChange}
        />
        <MoviesCardList
          movies={movies}
          displayedMovies={displayedMovies}
          additionalMovies={additionalMovies}
          isLoading={isLoading}
          allMoviesError={allMoviesError}
          onMovieLike={onMovieLike}
          getSavedMovies={getSavedMovies}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Movies;
