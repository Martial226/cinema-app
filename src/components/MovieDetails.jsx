import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Film non trouvé</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Bande-annonce"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br /><br />
      <button onClick={() => navigate(-1)}>⬅️ Retour</button>
    </div>
  );
}

export default MovieDetails;

