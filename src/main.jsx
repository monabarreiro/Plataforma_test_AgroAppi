import React from 'react'
import ReactDOM from 'react-dom/client'
import {Principal} from './componentes/Principal'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register} from './componentes/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Prueba } from './componentes/Prueba';
import{DescLimon, DescTrigo, DescUva, DescMaiz}from './componentes/Descripcion';



// esto va a contener todos los componentes
// los jsx hay que compilarlos 
const Lista_cultivos =() => {
  return (
  <div>
  <Prueba nombre = " Limón "i="0"/>
  <Prueba nombre = " Maíz " i="1"/>
  <Prueba nombre = " Uva "  i="2"/>
  <Prueba nombre = " Trigo" i="3"/>
  </div>
)}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        {/* Define other routes here */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Lista_cultivos" element={<Lista_cultivos />} /> 
        <Route path="/DescLimon" element={<DescLimon />} />
        <Route path="/DescTrigo" element={<DescTrigo />} />
        <Route path="/DescUva" element={<DescUva />} />
        <Route path="/DescMaiz" element={<DescMaiz />} />
      </Routes> 
    </Router>
   
  </React.StrictMode>,
)

