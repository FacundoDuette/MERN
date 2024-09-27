import { useState } from 'react';
import './App.css';
import FormularioTarjeta from './components/FormularioTarjeta';
import ListaTarjetas from './components/ListaTarjetas';

function App() {  
  const [listaTarjetas, setListaTarjetas]=useState([]);
  return (
    <>
      <div className='contenedor'>
        <h1>Generador de Tarjetas</h1>
        <FormularioTarjeta listaTarjetas={listaTarjetas} setListaTarjetas={setListaTarjetas}></FormularioTarjeta>
        <ListaTarjetas listaTarjetas={listaTarjetas}></ListaTarjetas>
      </div>
    </>
  )
}

export default App
