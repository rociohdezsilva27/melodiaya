import React from 'react';
import Navbar from '../components/Navbar';

const PlayerPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Reproductor de Música</h1>
        <p>Aquí aparecerá el reproductor.</p>
      </div>
    </div>
  );
};

export default PlayerPage;
