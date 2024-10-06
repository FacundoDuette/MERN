import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Content from './components/content/Content'

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/content/:name/:id/:location' element={<Content/>} />
    </Routes>
    </>
  )
}

export default App
