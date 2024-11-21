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

// Controlador para obtener una canción por ID
export const getSongById = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de los parámetros de la URL
    const song = await Song.findById(id); // Buscar la canción en la base de datos
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json(song); // Enviar la canción encontrada al cliente
  } catch (error) {
    console.error("Error al obtener la canción:", error);
    res.status(500).json({ message: "Server error" });
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

// Actualizar una canción por ID
export const updateSong = async (req, res) => {
  try {
    const { id } = req.params; 
    const updatedData = req.body; 
    const updatedSong = await Song.findByIdAndUpdate(id, updatedData, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedSong) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.json(updatedSong);
  } catch (error) {
    console.error("Error al actualizar la canción:", error);
    res.status(500).json({ message: "Error updating song" });
  }
};