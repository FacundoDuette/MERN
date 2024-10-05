import React from 'react';
import './App.css'
import { Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Art from './components/art/Art'

function App() {
 
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Art/:id" element={<Art/>} />
        </Routes>

    </>
  )
}

export default App
