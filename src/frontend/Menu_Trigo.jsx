import { Link } from "react-router-dom"
import "./Menu.css";
import img9 from "../img/trigo_para_enf.jpg"
export const Menu_Trigo=()=> {
    return (
        <div>
            <div>
                <h2 className= "m-3">
                    Enfermedades del Trigo
                    <img src={img9} alt="" width={"200px"} />

                </h2>
            </div>
            <div className= "row align-items-start">

            <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=209"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Carbón cubierto o caries de los cereales
            
             </button>

             </a> <br />  


             <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=212"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Carbón volador o suelto del trigo
            
             </button>

             </a> <br />  

             <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=216"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Enanismo amarillo de los cereales
            
             </button>

             </a> <br />  
             <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=22117"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">

Falsa mancha ocular del trigo
            
             </button>

             </a> <br />  


             <a className="col-4" href="hhttps://herbariofitopatologia.agro.uba.ar/?page_id=222"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Fusariosis de la espiga del trigo
            
             </button>

             </a> <br />  
            


             <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=227"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Mancha amarilla de la hoja del trigo
            
             </button>

             </a> <br />  
            

            
             <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=16476"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Mosaico estriado del trigo
            
             </button>

             </a> <br />  
            

             < Link to="/Lista_cultivos"> <button className="btn btn-lg btn-success  btn-block m-5" type="submit">
    Volver a Lista de cultivos </button>
       </Link>
          

             </div>
             </div>)
            }

