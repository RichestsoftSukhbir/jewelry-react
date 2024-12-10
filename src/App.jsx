import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import AboutUsPage from './pages/AboutUsPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<AboutUsPage />} />
    </Routes>
  )
}

export default App
