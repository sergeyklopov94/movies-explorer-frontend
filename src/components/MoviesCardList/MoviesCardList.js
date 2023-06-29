import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isLoading }) {

  const movieMoreButtonClassName = (movies.length > 9) ?
  ( "movies-card-list__more-button") :
  ( "movies-card-list__more-button movies-card__like-button_disactive");

  return (
    <section className="movies-card-list">
      {
        (localStorage.getItem("movies") !== null) && (localStorage.getItem("searchString") !== "") && (movies.length === 0) &&
        (isLoading === false) && (<span className="moviies-card-list__search-result">Ничего не найдено</span>)
      }
      {
        (isLoading === true) && (<Preloader />)
      }
      {
        (isLoading === false) && (
        <ul className="movies-card-list__container">
          {movies.map((movie) => (
            <MoviesCard movie={movie} key={movie.id}/>
          ))}
        </ul>)
      }
      <button className={movieMoreButtonClassName}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
