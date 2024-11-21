import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa el hook useParams
import { getSongById, updateSong } from "../api/songsApi";

const UpdateSong = () => {
  const { id } = useParams(); // Obtén el ID desde los parámetros de la URL
  const [song, setSong] = useState({ title: "", artist: "", genre: "", album: "" });

  useEffect(() => {
    const fetchSong = async () => {
      const data = await getSongById(id); // Asegúrate de tener implementado este endpoint
      if (data) {
        setSong(data);
      }
    };
    fetchSong();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedSong = await updateSong(id, song); // Llama al endpoint para actualizar la canción
    if (updatedSong) {
      alert("Song updated successfully!");
    } else {
      alert("Error updating song.");
    }
  };

  return (
    <div className="update-song-form">
      <h1>Update Song</h1>
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
        <button type="submit">Update Song</button>
      </form>
    </div>
  );
};

export default UpdateSong;