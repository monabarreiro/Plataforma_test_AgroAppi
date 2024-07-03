import { Link } from "react-router-dom"
import "./Menu.css";
import img11 from "../img/uva_para_enf.jpg"
export const Menu_Uva=()=> {
    return (
        <div>
            <div>
                <h2 className= "m-3">
                    Enfermedades de la Vid <br />
                    <img src={img11} alt="" width={"400px"} />

                </h2>

            </div>
            <div className= "row align-items-center">
            <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=16199"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Enfermedades del tronco de la vid
             </button>



             </a> <br />  

            <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=23319" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Acaro de la Vid
             </button>

             </a> <br />  


             <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=21410"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Deficiencia nutricional de hierro
             </button>

             </a> <br />  


             <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=10934"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Enfermedad del enrollamiento de la hoja
             </button>

             </a> <br />  

       
             <a className="col-4" href=" https://herbariofitopatologia.agro.uba.ar/?page_id=23679"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Filoxera de la vid
             </button>

             </a> <br />  

             <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=3678"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Podredumbre ácida de los racimos
             </button>

             </a> <br /> 


             <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=12626"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            
Oidio de la Vid
             </button>

             </a> <br />  



             < Link to="/Lista_cultivos"> <button className="btn btn-success lg btn-  btn-block m-5" type="submit">
    Volver a Lista de cultivos </button>
       </Link>

             </div>
             </div>)
            }