import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'
import {Routes, Route} from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Errorpage/>}/>
    </Routes>
    </>
  )
}

export default App