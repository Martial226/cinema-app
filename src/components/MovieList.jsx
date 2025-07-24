import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
}

export default MovieList;
