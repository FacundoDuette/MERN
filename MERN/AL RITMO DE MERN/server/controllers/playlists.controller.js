import Playlist from "../models/playlist.model.js";
import Song from "../models/song.model.js";

// Obtener todas las playlists
export const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate("songs"); // Cargar detalles de las canciones
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener playlists", error });
  }
};

// Obtener una playlist por ID
export const getPlaylistById = async (req, res) => {
  const { id } = req.params;

  try {
    const playlist = await Playlist.findById(id).populate("songs");
    if (!playlist) {
      return res.status(404).json({ message: "Playlist no encontrada" });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la playlist", error });
  }
};

// Crear una nueva playlist
export const addPlaylist = async (req, res) => {
  const { name, songs } = req.body;

  try {
    const newPlaylist = new Playlist({ name, songs });
    await newPlaylist.save();
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ message: "Error al crear playlist", error });
  }
};

// Agregar una canción a una playlist
export const addSongToPlaylist = async (req, res) => {
  const { id } = req.params;
  const { songId } = req.body;

  try {
    const playlist = await Playlist.findById(id);
    if (!playlist) {
      return res.status(404).json({ message: "Playlist no encontrada" });
    }

    // Verificar si la canción existe
    const song = await Song.findById(songId);
    if (!song) {
      return res.status(404).json({ message: "Canción no encontrada" });
    }

    // Agregar la canción a la playlist si no está ya incluida
    if (!playlist.songs.includes(songId)) {
      playlist.songs.push(songId);
      await playlist.save();
    }

    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar canción a la playlist", error });
  }
};

// Controlador para actualizar una playlist
export const updatePlaylist = async (req, res) => {
  try {
    const { id } = req.params; // Obtén el ID desde los parámetros de la URL
    const updatedData = req.body; // Obtén los datos enviados desde el cliente

    const updatedPlaylist = await Playlist.findByIdAndUpdate(id, updatedData, {
      new: true, // Devuelve el documento actualizado
      runValidators: true, // Ejecuta las validaciones del modelo
    });

    if (!updatedPlaylist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    res.json(updatedPlaylist); // Responde con la playlist actualizada
  } catch (error) {
    console.error("Error al actualizar la playlist:", error);
    res.status(500).json({ message: "Error updating playlist" });
  }
};