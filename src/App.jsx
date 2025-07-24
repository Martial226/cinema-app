import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterUrl: 'https://image.tmdb.org/t/p/w500//qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      rating: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers reality is an illusion.',
      posterUrl: 'https://image.tmdb.org/t/p/w500//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      rating: 9.0,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div>
      <h1>🎬 Cinéma App</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
      <AddMovie handleAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;
