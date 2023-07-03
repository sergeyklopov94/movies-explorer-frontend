import React from 'react';
import { useLocation } from 'react-router-dom';
import DecorLine from '../DecorLine/DecorLine';
import './MoviesCard.css';

function MoviesCard({ movie, onMovieLike, getSavedMovies }) {

  const location = useLocation();

  const [isLiked, setSelectedMovie] = React.useState(false);

  const movieCardButtonClassName = (location.pathname === "/movies" && isLiked) ?
  ( "movies-card__button_type_like movies-card__button_type_like_active" ) :
  (location.pathname === "/movies") ?
  ( "movies-card__button_type_like") :
  ( "movies-card__button_type_delete");

  const movieImageSrcClassName = (location.pathname === "/movies") ?
  (`https://api.nomoreparties.co${movie.image.url}`) :
  (`${movie.image}`);

  function handleMovieClick() {
    onMovieLike(movie, isLiked, setSelectedMovie);
  }

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      getSavedMovies(movie, setSelectedMovie);
    }
  }, []);

  function calculateDuration(duration) {
    const hours = Math.trunc(duration/60);
    const minutes = duration - hours * 60;
    if(hours === 0) {
      return `${minutes}м`;
    } else
      return `${hours}ч ${minutes}м`;
  }

  return (
    <li className="movies-card">
      <a
        href={ movie.trailerLink }
        className="movies-card__link"
        target="_blank"
        rel="noreferrer"
      >
        <img className="movies-card__image" src={movieImageSrcClassName} alt={ movie.nameRU }/>
      </a>
      <div className="movies-card__info">
        <h2 className="movies-card__name">{ movie.nameRU }</h2>
        <button className={`movies-card__button ${movieCardButtonClassName}`} type="button" onClick={ handleMovieClick }></button>
      </div>
      <DecorLine color="light"/>
      <p className="movies-card__time">{ calculateDuration(movie.duration) }</p>
    </li>
  );
}

export default MoviesCard;
