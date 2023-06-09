import './SearchForm.css';
import findLogo from '../../images/find-icon.svg';

function SearchForm() {
  return (
    <section className="search-form">
      <form>
        <div className="search-form__container">
          <img className="search-form__logo" src={findLogo} alt="Изображение лупы"/>
          <input className="search-form__input" placeholder="Фильм" required/>
          <button className="search-form__button" type="submit"></button>
        </div>
        <div className="search-form__switch-container">
          <label className="search-form__switch">
            <input type="checkbox" className="search-default-checkbox"/>
            <span className="search-form__slider"></span>
          </label>
          <span className="search-form__switch-text">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
