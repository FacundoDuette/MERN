import express from 'express';
import rutasPeliculas from './routes/movies.routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/movies', rutasPeliculas);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});