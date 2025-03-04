import { useState } from "react"; 
import "./navBar.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img13 from "../img/logo.png";

export const NavBar=( )=>{
   const [searchTerm, setSearchTerm] = useState('');
   const [searchBy, setSearchBy] = useState('cultivo');  // por defecto se busca por cultivo
  const [cultivos, setcultivos] = useState("limon");
   const navigate= useNavigate();
   const handleChange= (event)=>{
     setSearchTerm(event.target.value);
   };
   const handleChange2= (event)=>{
   setcultivos(event.target.value);
  };
   const handleSearch = () => {
    if(
      searchBy=="cultivo"
    ){navigate(`/Menu/${searchTerm}`);}
    else if(
      searchBy=="enfermedad"
    ){navigate(`/Mostrar_componentes/${searchTerm}/${cultivos}`);}
      
   };
   const handleEnter = (event)=>{
     if(event.key === 'Enter'){
       handleSearch();
     }
   }
   const handleLista = (event)=>{
  navigate(event);
   window.location.reload(); // recarga la pagina para que se muestre la lista de enfermedades
  

    }
    return (
<div>

<ul>

  <li> <Link to="/Contacto"> <a className="active" href="#logut">Contacto</a></Link>
  </li> 
  <li>
    <select onChange={

    (e) => handleLista(e.target.value)  
  } > 
    <option value="/Lista_cultivos">Enfermedades</option>
    <option value="/Menu/Limon">Limón</option>
    <option value="/Menu/Maiz">Maíz</option>
    <option value="/Menu/Soja">Soja</option>
    <option value="/Menu/Trigo">Trigo</option>
    <option value="/Menu/Uva">Uva</option>

   </select>
      </li> 

  <li> <Link to="/Lista_cultivos" >  <a href="#login"> Cultivos</a></Link>  </li>
  <li> <Link to="/" > <a href="#principal">Sobre AgroAppi</a> </Link> </li>

  <li> <input style={{ marginTop:"15px"}} type= "text"onChange={handleChange} value={searchTerm} 
   onKeyPress={handleEnter} /> </li>

   <li>
    <select hidden onChange={
    (e) => setSearchBy(e.target.value)  

    // se selecciona por cultivo o enfermedad  
    // en el input searchTerm  en el dropdown menu searchBy 
    // en el navBar.jsx  en la línea 20  y 21  se selecciona el valor de la 
    // opción seleccionada en el dropdown menu searchBy en el input searchTerm 
    // en el navBar.jsx en la línea 20  y 21  se selecciona el valor de la opción seleccionada 
    // en el dropdown menu searchBy en el input searchTerm en el navBar.jsx en la línea 20  y 21
   }>

    <option value="cultivo">Cultivo</option>

    <option value="enfermedad">Enfermedad</option>

   </select>

   
    </li>
    <li>
    <select hidden onChange={
    (e) => handleChange2(e.target.value)  
  } > 

    <option value="limon">Limón</option>

    <option value="uva">Uva</option>

    <option value="soja">Soja</option>

   </select>
      </li>  
      <div className = "d-flex flex-column align-items-start text-white">
      <img style={{position:"fixed", left:"150px"}} src={img13} className="float-left" alt="" width={"20px"}/> 
       <p style={{left:"100px", marginTop:"60px", position:"fixed"}}>
        AgroAppi
       </p>
       </div>
</ul>



    </div>)
    }