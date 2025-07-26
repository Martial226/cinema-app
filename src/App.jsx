import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>🎬 Mon Application Cinéma</h1>
      
      <Routes>
        {/* Page d'accueil avec liste des films */}
        <Route path="/" element={<MovieList />} />

        {/* Page de description d'un film */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
