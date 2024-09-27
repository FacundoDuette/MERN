import PropTypes from 'prop-types';

const ListaNotas = ({ listaNotas, setListaNotas, listaFiltrada, setListaFiltrada }) => {
  const filtrarPorPrioridad = (prioridad) => {
    if (prioridad === "todas") {
      setListaFiltrada(listaNotas);
    } else {
      setListaFiltrada(listaNotas.filter((nota) => nota.prioridad === prioridad));
    }
  };

  return (
    <>
      <select id="filtro" className="filtro" onChange={(e) => filtrarPorPrioridad(e.target.value)}>
        <option value="todas">Todos</option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      {listaFiltrada.map((nota, index) => (
        <div className="card" key={index}>
          {`${nota.nota} - Prioridad: ${nota.prioridad}`}
          <button onClick={() => setListaNotas(listaNotas.filter((_, i) => i !== index))}>
            Borrar
          </button>
        </div>
      ))}
    </>
  );
};

ListaNotas.propTypes = {
  listaNotas: PropTypes.arrayOf(
    PropTypes.shape({
      nota: PropTypes.string.isRequired,
      prioridad: PropTypes.string.isRequired,
    })
  ).isRequired,
  setListaNotas: PropTypes.func.isRequired,
  listaFiltrada: PropTypes.array.isRequired,
  setListaFiltrada: PropTypes.func.isRequired,
};

export default ListaNotas;