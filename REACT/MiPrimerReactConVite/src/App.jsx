import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bienvenido a mi aplicacion de REACT!</h1>
      <h3 className='verde'>Lista de cosas por hacer</h3>
      <p>Aprender REACT</p>
      <p>Practicar con VITE</p>
      <p>Construir proyectos increibles</p>
    </>
  )
}

export default App
