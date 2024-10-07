import express from 'express';
import ControladorPeliculas from '../controllers/movies.controllers.js';
const rutasPeliculas = express.Router();

//Crea una ruta GET que responda con una lista de todas las películas que han causado furor en el cine en los últimos años.
rutasPeliculas.get('/', ControladorPeliculas.obtenerPeliculas);
rutasPeliculas.get('/year/:id',ControladorPeliculas.obtenerPorAnio);
rutasPeliculas.delete('/:title',ControladorPeliculas.borrarPorTitulo);
//Crea una ruta PATCH con un parámetro de ruta «title» que permita modificar la propiedad «starring» de alguna película.
rutasPeliculas.patch('/:title',ControladorPeliculas.modificarEstrellas);
//Crea una ruta POST para agregar tu película favorita.
rutasPeliculas.post('/',ControladorPeliculas.agregarPelicula);

export default rutasPeliculas;