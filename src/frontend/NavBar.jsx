import { useState } from "react"; 
import "./navBar.css";
import { Link } from "react-router-dom";
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
    return (<div>

<ul>
  <li> <Link to="/"> <a className="active" href="#logut">Logout</a></Link>
  </li> 
  <li> <Link to="/login" >  <a href="#register">Login</a></Link>  </li>
  <li> <Link to="/register" >  <a href="#login">Register</a></Link>  </li>
  <li> <Link to="/" > <a href="#principal">Principal</a> </Link> </li>

  <li> <input type= "text"onChange={handleChange} value={searchTerm} 
   onKeyPress={handleEnter} /> </li>

   <li>
    <select onChange={
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
    <select  onChange={
    (e) => handleChange2(e.target.value)  
  } > 

    <option value="limon">Limón</option>

    <option value="uva">Uva</option>

    <option value="soja">Soja</option>

   </select>
      </li>  
      <img src={img13} className="float-left" alt="" width={"20px"} /> 
</ul>



    </div>)
    }