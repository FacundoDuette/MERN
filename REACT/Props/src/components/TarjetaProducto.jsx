// TarjetaProducto.jsx
const TarjetaProducto = ({ product }) => {
    const { nombreProducto, precio, descripcion, enStock } = product;
  
    return (
      <div className="tarjeta">
        <h3>{nombreProducto}</h3>
        <p>{precio}</p>
        <p>{descripcion}</p>
        <p className={enStock === 'EN STOCK' ? 'stock' : 'no-stock'}>
          {enStock}
        </p>
      </div>
    );
  };
  
  export default TarjetaProducto;