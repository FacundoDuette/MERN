const ListaTarjetas = ({listaTarjetas}) => {
    return (
        <div className="contenedor-tarjetas">
        {listaTarjetas.map((tarjeta, index) => (
  <div
    key={index}  // Usar el índice como clave, ya que ahora es un array
    className="tarjeta"
    style={{
      backgroundColor: tarjeta.color,
      border: `2px ${tarjeta.borde} black`,
    }}
  >
    <h3>{tarjeta.titulo}</h3>
    <p>{tarjeta.descripcion}</p>
  </div>
))}
        </div>
    );
};
export default ListaTarjetas;