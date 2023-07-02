import React from 'react';
import './SearchForm.css';
import findLogo from '../../images/find-icon.svg';
import useFormWithValidation from "../../hooks/useValidation";

function SearchForm({
  handleSearchButtonSubmit,
  errorMessage,
  handleGetFilteredMovies
}) {

  const { values, checkes, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearchButtonSubmit(values, checkes);
  }

  const handleCheckboxClick = () => {
    if (localStorage.getItem("filteredMovies") !== null) {
      localStorage.setItem("searchCheckBoxState", !checkes.searchCheckBoxState);
      handleGetFilteredMovies(JSON.parse(localStorage.getItem("movies")));
    }
   }

  React.useEffect(() => {
    const searchString = localStorage.getItem("searchString");
    const searchCheckBoxState = localStorage.getItem("searchCheckBoxState");
    if (searchString === null || searchString === undefined)
      localStorage.setItem("searchString", "");
     if (searchCheckBoxState === null || searchCheckBoxState === undefined)
       localStorage.setItem("searchCheckBoxState", false);
      resetForm(
      { searchString: localStorage.getItem("searchString") },
      { searchCheckBoxState: JSON.parse(localStorage.getItem("searchCheckBoxState")) },
      {},
      false);

      if (localStorage.getItem("movies") !== null)
        handleGetFilteredMovies(JSON.parse(localStorage.getItem("movies")));
  }, []);

  React.useEffect(() => {
    console.log(localStorage.getItem("movies"));
  }, [checkes.searchCheckBoxState]);

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
