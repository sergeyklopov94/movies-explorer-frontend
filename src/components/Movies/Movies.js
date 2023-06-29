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
  searchString,
  setSearchString,
  errorMessage,
  isLoading
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
          searchString={searchString}
          setSearchString={setSearchString}
          errorMessage={errorMessage}
        />
        <MoviesCardList
          movies={movies}
          isLoading={isLoading}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Movies;
