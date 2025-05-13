import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Song {
  id: string;
  name: string;
  artist_name: string;
  album_image: string;
  audio_url: string; // Asegúrate de tener la URL del audio
}

const SongList = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [playingSongId, setPlayingSongId] = useState<string | null>(null); // Estado para saber cuál canción se está reproduciendo

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://api.jamendo.com/v3.0/tracks', {
          params: {
            client_id: '2758b66e',
            limit: 12,
            format: 'json',
            include: 'musicinfo',
          }
        });

        const fetchedSongs = response.data.results.map((song: {
          id: string;
          name: string;
          artist_name: string;
          album_image: string;
          image: string;
          audio: string; // Asegúrate de que la API te devuelva la URL del audio
        }) => ({
          id: song.id,
          name: song.name,
          artist_name: song.artist_name,
          album_image: song.album_image || song.image,
          audio_url: song.audio || '', // Guardamos la URL del audio
        }));

        setSongs(fetchedSongs);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const handlePlayPause = (id: string) => {
    const audioElement = document.getElementById(`audio-${id}`) as HTMLAudioElement;

    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
        setPlayingSongId(id); // Actualizamos el ID de la canción que se está reproduciendo
      } else {
        audioElement.pause();
        setPlayingSongId(null); // Si la canción se pausa, limpiamos el ID
      }
    }
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        {songs.map(song => (
          <div key={song.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card bg-dark text-white h-100 shadow-sm">
              <img src={song.album_image} className="card-img-top" alt={song.name} />
              <div className="card-body">
                <h5 className="card-title mb-1">{song.name}</h5>
                <p className="card-text text-muted small">{song.artist_name}</p>
                {/* Botón de Reproducción */}
                <div className="d-flex justify-content-center align-items-center position-relative">
                  <button
                    className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
                    onClick={() => handlePlayPause(song.id)}
                  >
                    {/* Cambiar el ícono basado en si la canción está en reproducción o pausada */}
                    {playingSongId === song.id ? (
                      <i className="fas fa-pause"></i> // Si la canción está en reproducción, muestra el ícono de pausa
                    ) : (
                      <i className="fas fa-play"></i> // Si la canción está pausada, muestra el ícono de play
                    )}
                  </button>
                  {/* Elemento de audio oculto pero presente */}
                  <audio id={`audio-${song.id}`} src={song.audio_url} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;

