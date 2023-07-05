import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

function MoviesCardList({
  movies,
  isLoading,
  allMoviesError,
  onMovieLike,
  getSavedMovies,
  displayedMovies,
  setDisplayedMovies,
  additionalMovies
}) {

  const location = useLocation();

  const [finitedMovies, setFinitedMovies] = React.useState([]);

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      const newMovies = movies.slice(0, displayedMovies);
      setFinitedMovies(newMovies);
    }
  }, [location.pathname, movies, displayedMovies]);

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setFinitedMovies(movies);
    }
  }, [location.pathname, movies]);

  function handleClickOnButtonMore() {
    if ((movies.length - finitedMovies.length) !== 0) {
      const newMovies = movies.slice(finitedMovies.length, finitedMovies.length + additionalMovies);
      setFinitedMovies([...finitedMovies, ...newMovies]);
      setDisplayedMovies(displayedMovies + additionalMovies);
    }
  }

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
          {finitedMovies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.movieId || movie.id}
              onMovieLike={onMovieLike}
              getSavedMovies={getSavedMovies}/>
          ))}
        </ul>)
      }

      {(location.pathname === "/movies") && (movies.length > displayedMovies) &&
      <button className="movies-card-list__more-button" onClick={ handleClickOnButtonMore }>Ещё</button>
      }
    </section>
  );
}

export default MoviesCardList;
