import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlaylistById, updatePlaylist, getAllSongs } from "../api/playlistsApi";

const UpdatePlaylist = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState({ name: "", songs: [] });
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlistData = await getPlaylistById(id);
        const songsData = await getAllSongs();
        setPlaylist(playlistData);
        setAllSongs(songsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  const handleSongSelection = (songId) => {
    const isSelected = playlist.songs.includes(songId);
    if (isSelected) {
      setPlaylist({
        ...playlist,
        songs: playlist.songs.filter((id) => id !== songId),
      });
    } else {
      setPlaylist({
        ...playlist,
        songs: [...playlist.songs, songId],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePlaylist(id, playlist);
      alert("Playlist updated successfully!");
      navigate("/playlists");
    } catch (error) {
      console.error("Error updating playlist:", error);
      alert("Failed to update playlist.");
    }
  };

  return (
    <div className="update-playlist-container">
      <h1>Edit Playlist</h1>
      <form onSubmit={handleSubmit} className="update-playlist-form">
        <label>Playlist Name:</label>
        <input
          type="text"
          name="name"
          value={playlist.name}
          onChange={handleChange}
          required
        />

        <h3>Choose Songs</h3>
        <div className="songs-list">
          {allSongs.map((song) => (
            <div key={song._id} className="song-item">
              <input
                type="checkbox"
                id={song._id}
                checked={playlist.songs.includes(song._id)}
                onChange={() => handleSongSelection(song._id)}
              />
              <label htmlFor={song._id}>{song.title}</label>
            </div>
          ))}
        </div>

        <button type="submit" className="save-changes-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdatePlaylist;