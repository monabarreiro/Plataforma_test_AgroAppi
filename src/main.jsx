import React from 'react'
import ReactDOM from 'react-dom/client'
import {Principal} from './componentes/Principal'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Register} from './componentes/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Prueba } from './componentes/Prueba';
import{DescLimon, DescTrigo, DescUva, DescMaiz}from './componentes/Descripcion';

import { Login} from './componentes/Login';
import { Menu_Citricos} from './componentes/Menu_Citricos';
import {Menu_Maiz}from './componentes/Menu_Maiz'; 
import {Menu_Trigo}from './componentes/Menu_Trigo';
import {Menu_Uva}from './componentes/Menu_Uva';
import "./Main.css";



// esto va a contener todos los componentes
// los jsx hay que compilarlos 
const Lista_cultivos =() => {
  return (

    <div className= "container ">
      <div className=''></div>
      <img src="" alt="Logo de la pagina" />
      <h1 className= "text-center mt-5">Cultivos Referentes de Argentina</h1>
  <div className="  row align-items-start" style ={{backgroundColor:"#FEFAE0"}} >
  <Prueba className="col-4" nombre = " Limón "i="0"/>
  <Prueba className="col-4" nombre = " Maíz " i="1"/>
  </div>

  <div className=" row align-items-start"style ={{backgroundColor:"#FEFAE0"}}>
  <Prueba className="col-4" nombre = " Uva "  i="2"/>
  <Prueba className="col-4" nombre = " Trigo" i="3"/>
  </div>

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
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu_Citricos" element={<Menu_Citricos />} />
        <Route path="/Menu_Maiz" element={<Menu_Maiz />} />
        <Route path="/Menu_Trigo" element={<Menu_Trigo />} />
        <Route path="/Menu_Uva" element={<Menu_Uva />} />

      </Routes> 
    </Router>
   
  </React.StrictMode>,
)

