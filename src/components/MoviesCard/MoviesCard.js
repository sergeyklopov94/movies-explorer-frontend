import DecorLine from '../DecorLine/DecorLine';
import './MoviesCard.css';

function MoviesCard({ movie, isLiked, onCardLike }) {

  const movieLikeButtonClassName = (
    `movies-card__like-button ${isLiked && 'movies-card__like-button_active'}`
  );

  return (
    <li className="movies-card">
      <img className="movies-card__image" src={ movie.image } alt={ movie.name }/>
      <div className="movies-card__info">
        <h2 className="movies-card__name">{ movie.name }</h2>
        <button className={ movieLikeButtonClassName } type="button" onClick={ onCardLike }></button>
      </div>
      <DecorLine color="light"/>
      <p className="movies-card__time">{ movie.duration }</p>
    </li>
  );
}

export default MoviesCard;
