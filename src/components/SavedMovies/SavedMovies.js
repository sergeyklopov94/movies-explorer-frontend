import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import useFormWithValidation from "../../hooks/useValidation";

function SavedMovies({
  savedMovies,
  isBurgerMenuOpen,
  onBurgerButtonClick,
  onBurgerLinkClick,
  onSearchButtonSubmit,
  isLoading,
  allMoviesError,
  getAllSavedMovies,
  handleGetFilteredMovies,
  setSavedMovies }) {

  const { values, checkes, handleChange, resetForm } = useFormWithValidation();

  React.useEffect(() => {
    // const searchString = localStorage.getItem("searchString");
    // const searchCheckBoxState = localStorage.getItem("searchCheckBoxState");
    // if (searchString === null || searchString === "undefined")
    //   localStorage.setItem("searchString", "");
    // console.log(searchCheckBoxState);
    // if (searchCheckBoxState === null || searchCheckBoxState === "undefined"){
    //   console.log(searchCheckBoxState);
    //   localStorage.setItem("searchCheckBoxState", false);
    // }
    resetForm(
    { searchString: "" },
    { searchCheckBoxState: false },
    {},
    false);
  }, []);

  React.useEffect(() => {
    console.log("монтирование сохраненок");
    getAllSavedMovies();
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
      <main className="saved-movies">
        <SearchForm
          handleSearchButtonSubmit={onSearchButtonSubmit}
          values={values}
          checkes={checkes}
          handleChange={handleChange}
          handleGetFilteredMovies={handleGetFilteredMovies}
          setSavedMovies={setSavedMovies}
        />
        <MoviesCardList
          movies={savedMovies}
          isLoading={isLoading}
          allMoviesError={allMoviesError}
        />
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;
