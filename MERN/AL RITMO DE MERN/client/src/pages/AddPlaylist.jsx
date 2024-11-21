import React, { useState, useEffect } from "react";
import { getAllSongs } from "../api/songsApi";
import { createPlaylist } from "../api/playlistsApi";

const AddPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getAllSongs();
      setSongs(data);
    };
    fetchSongs();
  }, []);

  const handleCheckboxChange = (songId) => {
    setSelectedSongs((prev) =>
      prev.includes(songId) ? prev.filter((id) => id !== songId) : [...prev, songId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlaylist = await createPlaylist({
      name: playlistName,
      songs: selectedSongs,
    });
    if (newPlaylist) {
      alert("Playlist created successfully!");
      setPlaylistName("");
      setSelectedSongs([]);
    } else {
      alert("Error creating playlist.");
    }
  };

  return (
    <div className="add-playlist-form">
      <h1>Create New Playlist</h1>
      <form onSubmit={handleSubmit}>
        <label>Playlist Name:</label>
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
        <h2>Choose Songs</h2>
        <ul>
          {songs.map((song) => (
            <li key={song._id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedSongs.includes(song._id)}
                  onChange={() => handleCheckboxChange(song._id)}
                />
                {song.title} by {song.artist}
              </label>
            </li>
          ))}
        </ul>
        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default AddPlaylist;