import { Link } from 'react-router-dom'; // va aqui el Link 


export const Principal =()=>{

    return(
        <div> 
            <h1 className= "m-3"> Bienvenido a AgroAppi </h1>


               <h4 className= "m-3">Si no está registrado regístrese </h4> 

               <Link to = "/Register" className= "">
                 <button className="btn btn-lg btn-primary
                  btn-block m-3" type="texto"> Para registrarse haga click aquí.</button>
               </Link>

              <h4 className= "m-3">
                Si ya está registrado entre con su clave y contraseña</h4> 
               <Link to = "/Login" className= ""> 

               <button className="btn btn-lg btn-primary
                  btn-block m-3" type="texto"> En este link con su clave y contraseña.</button>
                
             </Link>
               
              
               </div>
    )
};
