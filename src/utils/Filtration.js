import { SHORT_MOVIE_DURATION } from '../constants/Constants';

export function filterMovies(movies, searchString) {
  const newMovies = movies.filter((movie) => {
    return (movie.nameRU.toLowerCase().includes(searchString) ||
    movie.nameEN.toLowerCase().includes(searchString))
  });
  return newMovies;
}

export function filterShortMovies(movies, checkboxState) {
  const newMovies = movies.filter((movie) => {
    if (checkboxState === true) {
      return (movie.duration <= SHORT_MOVIE_DURATION)
    }
  });
  return newMovies;
}
