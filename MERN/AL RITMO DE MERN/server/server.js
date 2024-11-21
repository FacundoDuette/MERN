import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import conectarDB from "./db/mongoose.config.js";
import songsRoutes from "./routes/songs.routes.js";
import playlistsRoutes from "./routes/playlists.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Conectar a la base de datos
conectarDB();

// Configurar rutas
app.use("/api/songs", songsRoutes);
app.use("/api/playlists", playlistsRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});