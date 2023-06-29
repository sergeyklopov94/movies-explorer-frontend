export function filterMovies(movies, searchString) {
  const newMovies = movies.filter((movie) => {
    return (movie.nameRU.toLowerCase().includes(searchString.toLowerCase()) ||
    movie.nameEN.toLowerCase().includes(searchString.toLowerCase()))
  });
  return newMovies;
}
