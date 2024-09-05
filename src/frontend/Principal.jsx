import { Link } from 'react-router-dom'; // va aqui el Link 
import { NavBar } from './NavBar';
import img from "../img/sojaregada.jpg";  // background image



export const Principal =()=>{  

    return(

        <div style={{backgroundImage:`url(${img})`, 
        minheight: "100% ", height:"100%",backgroundSize:"100% 100%", 
        
       }}>  
        {/* para incorporar una foto de bacground*/}
           
           <NavBar/>

            <h2 className= "m-3 text-white" > Bienvenido a AgroAppi </h2>
        
               <h5 className= "m-3 text-white">Si no está registrado regístrese </h5> 

               <Link to = "/Register" className= "">
                 <button className="btn btn-lg btn-primary
                  btn-block m-3" type="texto"> Para registrarse haga click aquí.</button>
               </Link>

              <h5 className= "m-3 text-white">
                Si ya está registrado entre con su clave y contraseña</h5> 
               <Link to = "/Login" className= ""> 

               <button className="btn btn-lg btn-primary
                  btn-block m-3" type="texto"> En este link con su clave y contraseña.</button>
                
             </Link>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
               </div>
    )
};
