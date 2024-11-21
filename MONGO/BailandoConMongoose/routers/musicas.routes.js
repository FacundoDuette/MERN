import express from 'express';
import ControladorMusicas from '../controllers/musicas.controllers.js';

const rutasMusicas = express.Router();

rutasMusicas.get('/', ControladorMusicas.obtenercanciones);
rutasMusicas.get('/:title',ControladorMusicas.obtenerPorAnio);
rutasMusicas.delete('/:title',ControladorMusicas.borrarPorTitulo);
rutasMusicas.patch('/:title',ControladorMusicas.modificarEstrellas);
rutasMusicas.post('/',ControladorMusicas.agregarcancion);

export default rutasMusicas;