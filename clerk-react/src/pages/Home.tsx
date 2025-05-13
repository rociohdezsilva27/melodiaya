import React from "react";
import SongList from "../components/SongsList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a MelodíaYa</h1>
        <p className="text-xl mb-8">Descubre música, crea tus listas y disfruta de la mejor experiencia auditiva</p>
        <button className="btn btn-primary py-3 px-6 rounded-full">Comienza a escuchar</button>
      </section>

      {/* Songs Section */}
      <SongList/>
      
      {/* Footer */}
      <footer className="bg-teal-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MelodiaYa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
