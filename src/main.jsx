import React from 'react'
import {NavBar} from "./frontend/NavBar";
import ReactDOM from 'react-dom/client'
import {Principal} from './frontend/Principal'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Register} from './frontend/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Prueba } from './frontend/Prueba';
import{DescLimon, DescTrigo, DescUva, DescMaiz}from './componentes/Descripcion';
import {Pagina_admin} from   './frontend/pagina_admin';
import {db} from './backend/firebase';  // importamos la base de datos de firebase
import{getDocs, collection } from 'firebase/firestore';
import{useState, useEffect} from 'react';
import { Login} from './frontend/Login';
import { Menu_Citricos} from './frontend/Menu_Citricos';
import {Menu_Maiz}from './frontend/Menu_Maiz'; 
import {Menu_Trigo}from './frontend/Menu_Trigo';
import {Menu_Uva}from './frontend/Menu_Uva';
import "./Main.css";
import img14 from "./img/logoagroappi.png";
import{Mostrar_componentes} from "./frontend/Mostrar_componentes";
import {Menu} from "./frontend/Menu";
import { DashboardCompra } from './frontend/DashboardCompra';


import {App} from './frontend/App';


// esto va a contener todos los componentes
// los jsx hay que compilarlos 
const Lista_cultivos =() => {
  
  const [cultivos, setCultivos] = useState([]);  // cultivos es la variable del useState

  useEffect(() => {
    const fetchCultivos = async () => {
      const querySnapshot = await getDocs(collection(db, 'cultivos'));
      const cultivosList = querySnapshot.docs.map(doc => doc.data());
      setCultivos(cultivosList);
    };

    fetchCultivos();
  }, []);
 
  return (

    <div className= "container">
      <NavBar/>
      <div className="row align-items-start">
      { cultivos.map((cultivo, index) => (
          <div key={index} className="col-6 ">
            <Prueba nombre = {cultivo.cultivo} img={cultivo.img}/>
             
          </div>
        ))}
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
        <Route path="/DescLimón" element={<DescLimon />} />
        <Route path="/DescTrigo" element={<DescTrigo />} />
        <Route path="/DescUva" element={<DescUva />} />
        <Route path="/DescMaiz" element={<DescMaiz />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu_Limón" element={<Menu_Citricos />} />
        <Route path="/Menu_Maiz" element={<Menu_Maiz />} />
        <Route path="/Menu_Trigo" element={<Menu_Trigo />} />
        <Route path="/Menu_Uva" element={<Menu_Uva />} />
        <Route path="/Mostrar_componentes/:id/:cultivos" element={<Mostrar_componentes />} />
        <Route path="/Pagina_admin/" element={<Pagina_admin />} />
        <Route path="/Menu/:id" element={<Menu />} />
        <Route path="/App" element={<App />} />
        <Route path="/DashboardCompra" element={<DashboardCompra />} />
        

        

      </Routes> 
    </Router>
   
  </React.StrictMode>,
)

