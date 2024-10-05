import { useState } from 'react'
import './App.css'
import ComponenteActividad from './components/ComponenteActividad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ComponenteActividad></ComponenteActividad>
      </div>
    </>
  )
}

export default App
