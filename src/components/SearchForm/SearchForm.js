import './SearchForm.css';
import findLogo from '../../images/find-icon.svg';

function SearchForm({ handleSearchButtonSubmit, searchString, setSearchString, errorMessage }) {

  function handleInputChange(evt) {
    setSearchString(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        <span className="search-form__error-message">{errorMessage}</span>
        <img className="search-form__logo" src={findLogo} alt="Изображение лупы"/>
        <input
          className="search-form__input"
          onChange={handleInputChange}
          value={searchString || ''}
          placeholder="Фильм"
          required/>
        <button className="search-form__button" type="submit" onClick={handleSearchButtonSubmit}></button>
      </div>
      <div className="search-form__switch-container">
        <label className="search-form__switch">
          <input type="checkbox" className="search-default-checkbox"/>
          <span className="search-form__slider"></span>
        </label>
        <span className="search-form__switch-text">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;
