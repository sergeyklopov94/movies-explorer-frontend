import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import useFormWithValidation from "../../hooks/useValidation";

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
