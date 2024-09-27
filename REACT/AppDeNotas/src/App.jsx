import { useState, useEffect } from 'react'
import './App.css'
import FormularioNotas from './components/FormularioNotas'
import ListaNotas from './components/ListaNotas';

function App() {
  const [listaNotas, setListaNotas] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState(listaNotas);
  useEffect(() => {
    setListaFiltrada(listaNotas);
  }, [listaNotas]);
  return (
    <>
     <div className='app'>
        <h1>NOTAS</h1>
        <FormularioNotas listaNotas={listaNotas} setListaNotas={setListaNotas}></FormularioNotas>
        <h2>LISTA DE NOTAS</h2>
        <ListaNotas listaNotas={listaNotas} setListaNotas={setListaNotas} listaFiltrada={listaFiltrada} setListaFiltrada={setListaFiltrada}></ListaNotas>
     </div>
    </>
  )
}

export default App
