import { Link } from "react-router-dom"
export const Menu_Uva=()=> {
    return (
        <div>
            <div>
                <h2 className= "m-3">
                    Enfermedades de la Vid

                </h2>

            </div>

            <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=23319"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Acaro de la Vid
             </button>

             </a> <br />  


             <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=21410"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Deficiencia nutricional de hierro
             </button>

             </a> <br />  


             <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=10934"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Enfermedad del enrollamiento de la hoja
             </button>

             </a> <br />  

             <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=16199"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Enfermedades del tronco de la vid
             </button>



             </a> <br />  
             <a href=" https://herbariofitopatologia.agro.uba.ar/?page_id=23679"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Filoxera de la vid
             </button>

             </a> <br />  



             <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=12626"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Oidio de la Vid
             </button>

             </a> <br />  

             <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=3678"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Podredumbre ácida de los racimos
             </button>

             </a> <br /> 


             < Link to="/Lista_cultivos"> <button className="btn btn-lg btn-  btn-block m-5" type="submit">
    Volver a Lista de cultivos </button>
       </Link>

             </div>)
            }