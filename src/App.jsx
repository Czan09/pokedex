import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Pokedex from './components/Pokedex';
import Interface from './components/interface';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Pokedex/>}></Route>
      <Route path='/interface' element={<Interface/>}></Route>
     </Routes>
    </>
  )
}

export default App
