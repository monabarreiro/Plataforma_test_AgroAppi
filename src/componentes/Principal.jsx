import { Link } from 'react-router-dom'; // va aqui el Link 
import { NavBar } from './NavBar';
import {img12} from"../img/logoagroappi.png";

export const Principal =()=>{

    return(
        <div> 
           <NavBar/>
        
          <img src={img12} alt="" width={"100px"} />
            <h2 className= "m-3"> Bienvenido a AgroAppi </h2>
        

               <h5 className= "m-3">Si no está registrado regístrese </h5> 

               <Link to = "/Register" className= "">
                 <button className="btn btn-lg btn-primary
                  btn-block m-3" type="texto"> Para registrarse haga click aquí.</button>
               </Link>

              <h5 className= "m-3">
                Si ya está registrado entre con su clave y contraseña</h5> 
               <Link to = "/Login" className= ""> 

               <button className="btn btn-lg btn-primary
                  btn-block m-3" type="texto"> En este link con su clave y contraseña.</button>
                
             </Link>
               
              
               </div>
    )
};
