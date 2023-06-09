import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ movies }) {
  return (
    <div className="saved-movies">
      <Header color="light"/>
      <SearchForm/>
      <MoviesCardList movies={movies}/>
      <Footer/>
    </div>
  );
}

export default SavedMovies;
