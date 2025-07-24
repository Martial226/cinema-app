function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{movie.title}</h2>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '200px' }} />
      <p>{movie.description}</p>
      <p>⭐ Note : {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
