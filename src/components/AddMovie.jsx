import { useState } from 'react';

function AddMovie({ handleAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      posterUrl,
      rating: parseFloat(rating),
    };
    handleAddMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>➕ Ajouter un film</h3>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de l'affiche"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
        required
      />
      <input
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddMovie;
