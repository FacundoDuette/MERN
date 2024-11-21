import express from "express";
import {
  getPlaylists,
  addPlaylist,
  getPlaylistById,
  addSongToPlaylist,
} from "../controllers/playlists.controller.js";

const router = express.Router();

// Ruta para obtener todas las playlists
router.get("/", getPlaylists);

// Ruta para obtener una playlist por ID
router.get("/:id", getPlaylistById);

// Ruta para crear una nueva playlist
router.post("/", addPlaylist);

// Ruta para agregar una canción a una playlist
router.put("/:id/songs", addSongToPlaylist);

export default router;