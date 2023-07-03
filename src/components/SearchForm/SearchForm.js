import React from 'react';
import './SearchForm.css';
import findLogo from '../../images/find-icon.svg';
import { useLocation } from 'react-router-dom';

function SearchForm({
  handleSearchButtonSubmit,
  errorMessage,
  handleGetFilteredMovies,
  setFilteredMovies,
  setSavedMovies,
  values,
  checkes,
  handleChange
}) {

  const location = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearchButtonSubmit(values, checkes);
  }

  const handleCheckboxClick = () => {
    if (localStorage.getItem("filteredMovies") !== null && location.pathname === "/movies") {
      localStorage.setItem("searchCheckBoxState", !checkes.searchCheckBoxState);
      setFilteredMovies(handleGetFilteredMovies(JSON.parse(localStorage.getItem("movies"))));
    } else {
      localStorage.setItem("savedSearchCheckBoxState", !checkes.searchCheckBoxState);
      setSavedMovies(handleGetFilteredMovies(JSON.parse(localStorage.getItem("savedMovies"))));
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        <span className="search-form__error-message">{errorMessage}</span>
        <img className="search-form__logo" src={findLogo} alt="Изображение лупы"/>
        <input
          className="search-form__input"
          name="searchString"
          onChange={handleChange}
          value={values.searchString || ''}
          placeholder="Фильм"
          required/>
        <button className="search-form__button" type="submit"></button>
      </div>
      <div className="search-form__switch-container">
        <label className="search-form__switch">
          <input
          className="search-default-checkbox"
          name="searchCheckBoxState"
          type="checkbox"
          onChange={handleChange}
          checked={checkes.searchCheckBoxState}
          onClick={handleCheckboxClick}
          />
          <span className="search-form__slider"></span>
        </label>
        <span className="search-form__switch-text">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;
