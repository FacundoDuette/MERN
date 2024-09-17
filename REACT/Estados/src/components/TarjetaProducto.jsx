import { useEffect, useState } from "react";

const TarjetaProducto = ({ product }) => {
    const { nombreProducto, precio, descripcion, enStock, cantidad } = product;

    const [valor, setValor] = useState(cantidad);
    const [disponibilidad, setDisponibilidad] = useState(enStock);
    const comprar = () => {
      setValor((valorAnterior)=>{
        if(valorAnterior > 1) {
          return valorAnterior - 1;
        } else {
          setDisponibilidad('AGOTADO');
          return 0;
        }
      });
    };

    return (
      <div className="tarjeta">
        <h3>{nombreProducto}</h3>
        <p>{precio}</p>
        <p>{descripcion}</p>
        <p className={disponibilidad === 'EN STOCK' ? 'stock' : 'no-stock'}>
          {enStock}: {valor}
        </p>
        <button onClick={comprar} disabled={disponibilidad === 'AGOTADO'}>Comprar</button>
      </div>
    );
  };
  
  export default TarjetaProducto;