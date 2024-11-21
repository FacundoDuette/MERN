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