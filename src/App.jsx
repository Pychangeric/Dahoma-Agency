import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHome from './Components/home/Main.Home'
import About from './Components/About/About';


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/aboutus" element={<About />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
