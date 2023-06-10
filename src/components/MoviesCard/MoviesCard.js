import React from 'react';
import { useLocation } from 'react-router-dom';
import DecorLine from '../DecorLine/DecorLine';
import './MoviesCard.css';

function MoviesCard({ movie }) {

  const location = useLocation();

  // временное решение для проверки активного состояния лайка
  const [isLiked, setSelectedMovie] = React.useState(false);

  const movieCardButtonClassName = (location.pathname === "/movies" && isLiked) ?
  ( "movies-card__button_type_like movies-card__button_type_like_active" ) :
  (location.pathname === "/movies") ?
  ( "movies-card__button_type_like") :
  ( "movies-card__button_type_delete");

  function handleMovieClick() {
    if (!isLiked)
      setSelectedMovie(true);
    else setSelectedMovie(false);
  }

  return (
    <li className="movies-card">
      <img className="movies-card__image" src={ movie.image } alt={ movie.name }/>
      <div className="movies-card__info">
        <h2 className="movies-card__name">{ movie.name }</h2>
        <button className={`movies-card__button ${movieCardButtonClassName}`} type="button" onClick={ handleMovieClick }></button>
      </div>
      <DecorLine color="light"/>
      <p className="movies-card__time">{ movie.duration }</p>
    </li>
  );
}

export default MoviesCard;
