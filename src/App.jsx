import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Pokedex from './components/Pokedex';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Pokedex/>}></Route>
     </Routes>
    </>
  )
}

export default App