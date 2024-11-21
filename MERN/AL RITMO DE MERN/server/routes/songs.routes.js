import express from "express";
import { getSongs, addSong, getSongById, updateSong } from "../controllers/songs.controller.js";

const router = express.Router();

// Ruta para obtener todas las canciones
router.get("/", getSongs);

// Ruta para agregar una nueva canción
router.post("/", addSong);

// Ruta para obtener una canción por ID
router.get("/:id", getSongById);

// Ruta para actualizar una canción por ID
router.put("/:id", updateSong);

export default router;