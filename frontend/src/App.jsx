import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Sprint1 from './pages/Sprint1'
import Sprint2 from './pages/Sprint2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sprint-1" element={<Sprint1 />} />
        <Route path="/sprint-2" element={<Sprint2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
