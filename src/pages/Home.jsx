import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Bienvenido a MelodiaYa</h1>
        <p>Tu música, tu estilo</p>
      </div>
    </div>
  );
};

export default HomePage;
