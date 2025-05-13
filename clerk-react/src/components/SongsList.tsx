import { useEffect, useState } from 'react'
import axios from 'axios'

interface Song {
  id: string
  name: string
  artist_name: string
  audio: string
  album_image: string
}

const SongList = () => {
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://api.jamendo.com/v3.0/tracks', {
          params: {
            client_id: '2758b66e', // Tu API Key de Jamendo
            format: 'json',
            limit: 10,
          }
        })
        setSongs(response.data.results)
      } catch (error) {
        console.error('Error al obtener canciones:', error)
      }
    }

    fetchSongs()
  }, [])

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} style={{ marginBottom: '1rem' }}>
          <h3>{song.name} - {song.artist_name}</h3>
          <img src={song.album_image} alt={song.name} width={100} />
          <audio controls src={song.audio}></audio>
        </div>
      ))}
    </div>
  )
}

export default SongList
