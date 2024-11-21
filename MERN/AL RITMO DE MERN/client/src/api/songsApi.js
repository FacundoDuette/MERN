import BASE_URL from "./apiConfig";

// Obtener todas las canciones
export const getAllSongs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/songs`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener canciones:", error);
    return [];
  }
};

export const getSongById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/songs/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la canción:", error);
    return null;
  }
};

// Agregar una nueva canción
export const addNewSong = async (song) => {
  try {
    const response = await fetch(`${BASE_URL}/songs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al agregar canción:", error);
    return null;
  }
};

export const updateSong = async (id, song) => {
  try {
    const response = await fetch(`${BASE_URL}/songs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating song:", error);
    return null;
  }
};