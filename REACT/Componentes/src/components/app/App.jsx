import './App.css';
import Navegacion from '../navegacion/Navegacion';
function App() {
  const estudiante = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: 'Calle 123, 456'
  };

  return (
    <>
      <Navegacion/>
      <h1>Componentes</h1>
      <p>{estudiante.nombre}</p>
    </>
  )
}

export default App
