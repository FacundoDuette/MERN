import React, { useState, useEffect } from "react";
import { getAllPlaylists } from "../api/playlistsApi";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = await getAllPlaylists();
      setPlaylists(data);
    };
    fetchPlaylists();
  }, []);

  return (
    <div className="playlists">
      <h1>All Playlists</h1>
      {playlists.length === 0 ? (
        <p>No playlists found.</p>
      ) : (
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist._id}>
              <a href={`/playlists/${playlist._id}`}>{playlist.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Playlists;