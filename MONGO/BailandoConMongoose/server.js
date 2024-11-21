import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';    

import conectarDB from './db/mongoose.config.js';
import rutasMusicas from './routers/musicas.routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use('/api/musicas', rutasMusicas);

conectarDB();

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});