import React, { useState, useEffect } from "react";
import { getAllPlaylists, addSongToPlaylist } from "../api/playlistsApi";
import { getAllSongs } from "../api/songsApi";

const PlaylistDetails = ({ match }) => {
  const { id } = match.params; 
  const [playlist, setPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState("");

  useEffect(() => {
    const fetchPlaylist = async () => {
      const data = await getAllPlaylists(id);
      setPlaylist(data);
    };
    fetchPlaylist();
  }, [id]);

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getAllSongs();
      setSongs(data);
    };
    fetchSongs();
  }, []);

  const handleAddSong = async () => {
    if (selectedSong) {
      const updatedPlaylist = await addSongToPlaylist(id, selectedSong);
      setPlaylist(updatedPlaylist);
      alert("Song added to playlist!");
    }
  };

  return (
    <div className="playlist-details">
      {playlist ? (
        <>
          <h1>{playlist.name}</h1>
          <h2>Songs in Playlist</h2>
          <ul>
            {playlist.songs.map((song) => (
              <li key={song._id}>
                {song.title} by {song.artist}
              </li>
            ))}
          </ul>
          <h2>Add Song to Playlist</h2>
          <select
            value={selectedSong}
            onChange={(e) => setSelectedSong(e.target.value)}
          >
            <option value="">Select a song</option>
            {songs.map((song) => (
              <option key={song._id} value={song._id}>
                {song.title} by {song.artist}
              </option>
            ))}
          </select>
          <button onClick={handleAddSong}>Add Song</button>
        </>
      ) : (
        <p>Loading playlist...</p>
      )}
    </div>
  );
};

export default PlaylistDetails;