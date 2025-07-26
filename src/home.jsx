import movies from "../data"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1> Liste des Films</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: '1rem' }}>
            <img src={movie.posterUrl} alt={movie.title} width="150" />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
