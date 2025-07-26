import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '1rem', padding: '1rem' }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={movie.posterUrl} alt={movie.title} width="150" />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
