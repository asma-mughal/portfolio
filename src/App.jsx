import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ImageGallery from './pages/ImageGallery'
import Dashboard from './pages/Dashboard'

function App() {
  
  return (
 <Routes>
  <Route path="/" element={<Dashboard />} />
<Route path="/gallery" element ={<ImageGallery />} />
 </Routes>
  )
}

export default App
