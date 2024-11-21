import canciones from "../models/musicas.models";

const obtenercanciones = async (req, res) => {
  try {
    const lista = await canciones.find();
    res.json(canciones);
  } catch (error) {
    
  }
};
const obtenerPorAnio = (req, res) => {
  const year = Number(req.params.id);
  const cancionesEnAnio = canciones.filter(
    (cancion) => cancion.yearReleased == year
  );
  res.json(cancionesEnAnio);
};
const borrarPorTitulo = (req, res) => {
  const title = req.params.title;
  const index = canciones.findIndex((cancion) => cancion.title == title);
  if (index !== -1) {
    canciones.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send("Película no encontrada");
  }
};
const modificarEstrellas = (req, res) => {
  const title = req.params.title;
  const index = canciones.findIndex((cancion) => cancion.title == title);
  if (index !== -1) {
    canciones[index].starring = req.body.starring;
    res.sendStatus(200);
  } else {
    res.status(404).send("Película no encontrada");
  }
};
const agregarcancion = (req, res) => {
  const cancion = req.body;
  canciones.push(cancion);
  res.status(201).send(cancion);
};

export default {
  obtenercanciones,
  obtenerPorAnio,
  borrarPorTitulo,
  modificarEstrellas,
  agregarcancion,
};
