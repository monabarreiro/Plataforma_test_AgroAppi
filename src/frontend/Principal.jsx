import { Link } from 'react-router-dom'; // va aqui el Link 
import { NavBar } from './NavBar';
import img from "../img/sojaregada.jpg";  // background image



export const Principal =()=>{  

    return(

        <div style={{backgroundImage:`url(${img})`,float:"left",
        minheight: "100% ", height:"100%",backgroundSize:"100% 100%", 
        
       }}>  
        {/* para incorporar una foto de bacground*/}
           
           <NavBar/>

           <br />
              <br />
              <br />
              <br />

            <div className= "d-flex flex-column align-items-start text-white p-5"> 
               <h2 className= "m-3 text-white" > Bienvenidos a la App de Cultivos </h2> 
      

               <Link to = "/Register" className= "">
                 <button className="btn btn-lg btn-light float-left
               
                  btn-block m-3" type="texto" style={{fontSize:"14px"}}> Si NO estás registrado, hacelo aquí.</button>
               </Link>

            
               <Link to = "/Login" className= ""> 

               <button className="btn btn-lg btn-secondary float-left
         
                  btn-block m-3" type="texto" style={{fontSize:"14px"}}> Si estás registrado, en este link con 
                  tu clave y contraseña.</button> 
                
             </Link>
             </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            
            
              
               </div>
    )
};
