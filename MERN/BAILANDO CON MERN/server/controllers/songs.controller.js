import Song from "../models/song.model.js";

// Obtener todas las canciones
export const getSongs = async (req, res) => {
  try {
    const songs = await Song.find(); // Obtiene todas las canciones de la base de datos
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener canciones", error });
  }
};

// Agregar una nueva canción
export const addSong = async (req, res) => {
  const { title, artist, genre, album } = req.body;

  try {
    const newSong = new Song({ title, artist, genre, album });
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar canción", error });
  }
};