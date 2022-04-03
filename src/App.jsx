import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddNote from './pages/AddNote'
import Home from './pages/Home'
import Note from './pages/Note'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='note' element={<Note />} />
        <Route path='addnote' element={<AddNote />} />
      
      </Routes>
    </BrowserRouter>



  )
}

export default App