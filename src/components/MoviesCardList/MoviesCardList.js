import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  movies,
  isLoading,
  allMoviesError,
  onMovieLike,
  getSavedMovies
}) {

  const movieMoreButtonClassName = (movies.length > 9) ?
  ( "movies-card-list__more-button") :
  ( "movies-card-list__more-button movies-card__like-button_disactive");

  return (
    <section className="movies-card-list">
      {
        (localStorage.getItem("movies") !== null) && (localStorage.getItem("searchString") !== "") && (movies.length === 0) &&
        (isLoading === false) && (<p className="moviies-card-list__search-result">Ничего не найдено</p>)
      }
      {
        (allMoviesError === true) && (<p className="moviies-card-list__search-result">Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>)
      }
      {
        (isLoading === true) && (<Preloader />)
      }
      {
        (isLoading === false) && (
        <ul className="movies-card-list__container">
          {movies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.movieId || movie.id}
              onMovieLike={onMovieLike}
              getSavedMovies={getSavedMovies}/>
          ))}
        </ul>)
      }
      <button className={movieMoreButtonClassName}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
