import BASE_URL from "./apiConfig";

// Obtener todas las playlists
export const getAllPlaylists = async () => {
  try {
    const response = await fetch(`${BASE_URL}/playlists`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener playlists:", error);
    return [];
  }
};

// Crear una nueva playlist
export const createPlaylist = async (playlist) => {
  try {
    const response = await fetch(`${BASE_URL}/playlists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playlist),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al crear playlist:", error);
    return null;
  }
};

// Agregar una canción a una playlist
export const addSongToPlaylist = async (playlistId, songId) => {
  try {
    const response = await fetch(`${BASE_URL}/playlists/${playlistId}/songs`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ songId }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al agregar canción a playlist:", error);
    return null;
  }
};