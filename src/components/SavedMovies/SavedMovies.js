import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ movies, isBurgerMenuOpen, onBurgerButtonClick, onBurgerLinkClick }) {
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
        <SearchForm/>
        <MoviesCardList movies={movies}/>
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;
