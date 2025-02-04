import React, { useEffect, useState } from 'react';

const token = 'BQAyc7-mfO2XD4C_-BADigokglVuVjfS3VfkYNQgmOcfwPbK1OjFMa8rCO1BXifuarGJyAdSorO67gfkhVBjEN47iHmnbuZ1q3fOFZzpzleLDqnj44SBuowCMqWFdUXtxA1OuYcbnuxNxlQXlyHWFz3rISyae_qN1VGHgmyQFoTEugHoEzxHon9ZAJRK3h5rHzjyK-OhRAKYEEw97qRLjfodFgQa2sgwvEoyNpu3WXNFHNEZlsvhsA4OlksVMaVBgmqOfOEdJU30tlQVUUmZayese1IThwnyk00dtB1w7cWF7tgcucHS';

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method,
    body: body ? JSON.stringify(body) : undefined
  });
  return await res.json();
}

async function getTopTracks() {
  const response = await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=5', 'GET');
  return response.items;
}

async function createPlaylist(tracksUri) {
  const { id: user_id } = await fetchWebApi('v1/me', 'GET');

  const playlist = await fetchWebApi(`v1/users/${user_id}/playlists`, 'POST', {
    name: 'My Top Tracks Playlist',
    description: 'Playlist created dynamically from user top tracks.',
    public: false
  });

  await fetchWebApi(`v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`, 'POST');

  return playlist;
}

const CreaPlaylist = () => {
  const [playlist, setPlaylist] = useState(null);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchTracksAndCreatePlaylist = async () => {
      const tracks = await getTopTracks();
      setTopTracks(tracks);
      const trackUris = tracks.map(track => track.uri);
      const createdPlaylist = await createPlaylist(trackUris);
      setPlaylist(createdPlaylist);
    };

    fetchTracksAndCreatePlaylist();
  }, []);

  return (
    <div>
      <h2>Spotify Playlist Creator</h2>
      {playlist ? (
        <>
          <h3>Playlist: {playlist.name}</h3>
          <iframe
            title="Spotify Playlist"
            src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
            width="100%"
            height="360"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </>
      ) : (
        <p>Creating your playlist...</p>
      )}
    </div>
  );
};

export default CreaPlaylist;
