import express from "express";
import { getSongs, addSong } from "../controllers/songs.controller.js";

const router = express.Router();

// Ruta para obtener todas las canciones
router.get("/", getSongs);

// Ruta para agregar una nueva canción
router.post("/", addSong);

export default router;