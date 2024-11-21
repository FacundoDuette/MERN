import React, { useState, useEffect } from "react";
import { getAllSongs } from "../api/songsApi";
import { Link } from "react-router-dom";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getAllSongs();
      setSongs(data);
    };
    fetchSongs();
  }, []);

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase()) ||
      song.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="songs">
      <h1>All Songs</h1>
      <input
        type="text"
        placeholder="Search songs by name, artist, or genre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredSongs.map((song) => (
          <li key={song._id}>
            <span>
              {song.title} by {song.artist} ({song.genre})
            </span>
            <Link to={`/update-song/${song._id}`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;