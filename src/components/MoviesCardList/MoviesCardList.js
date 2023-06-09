import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, isLiked, onCardLike }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {movies.map((movie) => (
          <MoviesCard movie={movie} isLiked={isLiked} onCardLike={onCardLike} key={movie.name}/>
        ))}
      </ul>
      <button className="movies-card-list__more-button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
