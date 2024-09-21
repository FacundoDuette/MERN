import { useState } from 'react'
import FormHero from './components/FormHero'
import './App.css'

function App() {
  const [listaHeroes, setListaHeroes] = useState({});
  return (
    <main>
      <FormHero listaHeroes={listaHeroes} setListaHeroes={setListaHeroes} ></FormHero>  
    </main>
  )
}

export default App
