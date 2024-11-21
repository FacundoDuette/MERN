import React, { useState } from "react";
import { addNewSong } from "../api/songsApi";

const AddSong = () => {
  const [song, setSong] = useState({ title: "", artist: "", genre: "", album: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSong = await addNewSong(song);
    if (newSong) {
      alert("Song added successfully!");
      setSong({ title: "", artist: "", genre: "", album: "" });
    } else {
      alert("Error adding song.");
    }
  };

  return (
    <div className="add-song-form">
      <h1>New Song</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={song.title}
          onChange={handleChange}
          required
        />
        <label>Artist:</label>
        <input
          type="text"
          name="artist"
          value={song.artist}
          onChange={handleChange}
          required
        />
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={song.genre}
          onChange={handleChange}
          required
        />
        <label>Album:</label>
        <input
          type="text"
          name="album"
          value={song.album}
          onChange={handleChange}
        />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSong;