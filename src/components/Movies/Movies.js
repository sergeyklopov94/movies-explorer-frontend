import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ movies }) {
  return (
    <div className="movies">
      <Header color="light"/>
      <SearchForm/>
      <MoviesCardList movies={movies}/>
      <Footer/>
    </div>
  );
}

export default Movies;
