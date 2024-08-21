import React from 'react' 
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as bootstrap from 'bootstrap'

import './index.css'
import Usuarios from './Usuarios'
import NoEncontrado from './pages/NoEncontrado'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Navbar from './components/Navbar'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path="/" element={<Inicio/>}/>
      <Route path="/usuarios" element={<Usuarios/>}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="*" element={<NoEncontrado/>}/>
      
    </Routes>

  </BrowserRouter>
 
)

