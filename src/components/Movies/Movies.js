import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

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
  handleGetFilteredMovies
 }) {

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
          // values={values}
          // checkes={checkes}
          // handleChange={handleChange}
          // resetForm={resetForm}
        />
        <MoviesCardList
          movies={movies}
          isLoading={isLoading}
          allMoviesError={allMoviesError}
          onMovieLike={onMovieLike}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Movies;
