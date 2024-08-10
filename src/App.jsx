// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Adult from './components/Adult'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import './App.css'



function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adult' element={<Adult />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
