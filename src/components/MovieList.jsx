import movies from '../data';
import MovieCard from './MovieCard';

function MovieList() {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
