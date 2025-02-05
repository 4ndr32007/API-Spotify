import React, { useState, useEffect } from 'react'

const SimilarTracks = () => {
  const [artist, setArtist] = useState('') // Usa lo stato per memorizzare l'artista
  const [track, setTrack] = useState('') // Usa lo stato per memorizzare la traccia
  const [similarTracks, setSimilarTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (!artist || !track) {
      console.log('Artist or track is empty, skipping API call.')
      return
    }

    setLoading(true)
    console.log('Fetching similar tracks for:', artist, track)

    const API_KEY = 'd19e34ff4a77f9cc70aebc4869223dca'
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(track)}&api_key=${API_KEY}&format=json&limit=60`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received from API:', data)
        if (data.similartracks?.track) {
          setSimilarTracks(data.similartracks.track)
        } else {
          console.log('No similar tracks found.')
          setSimilarTracks([])
        }
      })
      .finally(() => {
        console.log('Loading finished.')
        setLoading(false)
        setFlag(false)
      })
  }, [flag])

  const handleSubmit = () => {
	 setFlag(true)
    console.log('Ricerca avviata con artista:', artist, 'e traccia:', track)
    setSimilarTracks([])  // Svuotiamo la lista ad ogni invio

  }

  return (
    <div>
      <h2>Trova brani simili</h2>
      <div>
        <input
          type="text"
          placeholder="Artista"
          value={artist}
          onChange={(e) => setArtist(e.target.value)} // Usa setArtist per aggiornare lo stato
        />
        <input
          type="text"
          placeholder="Brano"
          value={track}
          onChange={(e) => setTrack(e.target.value)} // Usa setTrack per aggiornare lo stato
        />
        <input type="button" value="Carica" onClick={handleSubmit} />
      </div>

      {loading ? (
        <p>Caricamento...</p>
      ) : (
        <ul>
          {similarTracks.length > 0 ? (
            similarTracks.map((track, index) => (
              <li key={index}>
                <a href={track.url} target="_blank" rel="noopener noreferrer">
                  {track.name} - {track.artist.name}
                </a>
              </li>
            ))
          ) : (
            <p>Nessun brano trovato.</p>
          )}
        </ul>
      )}
    </div>
  )
}

export default SimilarTracks
