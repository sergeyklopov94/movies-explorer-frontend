import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {

  const movieMoreButtonClassName = (movies.length > 9) ?
  ( "movies-card-list__more-button") :
  ( "movies-card-list__more-button movies-card__like-button_disactive");

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {movies.map((movie) => (
          <MoviesCard movie={movie} key={movie.name}/>
        ))}
      </ul>
      <button className={movieMoreButtonClassName}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
