// App.jsx
import './App.css';
import TarjetaProducto from './components/TarjetaProducto';

const productos = [
  {
    nombreProducto: 'Laptop',
    precio: '$1500',
    descripcion: 'Una potente laptop para trabajar y jugar.',
    enStock: 'EN STOCK',
    cantidad: 5
  },
  {
    nombreProducto: 'Smartphone',
    precio: '$800',
    descripcion: 'Un smartphone de última generación.',
    enStock: 'AGOTADO',
    cantidad: 0
  },
  {
    nombreProducto: 'Auriculares',
    precio: '$200',
    descripcion: 'Auriculares con cancelación de ruido.',
    enStock: 'EN STOCK',
    cantidad: 10
  },
  {
    nombreProducto: 'Monitor',
    precio: '$300',
    descripcion: 'Monitor 4K para una experiencia visual increíble.',
    enStock: 'EN STOCK',
    cantidad: 20
  }
];

function App() {
  return (
    <div className="tarjetas-contenedor">
      {productos.map((producto, index) => (
        <TarjetaProducto product={producto} />
      ))}
    </div>
  );
}

export default App;