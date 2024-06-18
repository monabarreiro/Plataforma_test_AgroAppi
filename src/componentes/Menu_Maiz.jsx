import { Link } from "react-router-dom"
import "./Menu.css";
import img10 from "../img/maiz2.jpg"

export const Menu_Maiz=()=>{
    return(
        <div>
            <div>
             <h2 className= "m-3"> 
                    Enfermedades del Maíz <br />
                    <br />

                    <img src={img10} alt="" width={"400px"} />

                 
                </h2>
            
            </div>
            <div className= "row align-items-start">
            
            <a className="col-3"  href="https://herbariofitopatologia.agro.uba.ar/?page_id=136"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            Mal del Río Cuarto

             </button>

             </a> <br />

             <a className="col-3"  href="https://herbariofitopatologia.agro.uba.ar/?page_id=119"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            Carbón de la espiga 

             </button>

             </a> <br />

            
             <a className="col-3" href="https://herbariofitopatologia.agro.uba.ar/?page_id=19168"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
                Deficiencia de Nitrógeno

 
            </button>
            </a> <br />

             <a className="col-3" href="https://herbariofitopatologia.agro.uba.ar/?page_id=3877"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            Mancha Blanca

             </button>

             </a> <br />

             <a className="col-4"  href="https://herbariofitopatologia.agro.uba.ar/?page_id=19649"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
           Deficiencia de Manganeso

             </button>

             </a> <br />

            <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=126"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
            Carbón de la panoja del maíz

             </button>

             </a> <br />

            <a className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=19161"target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
                Deficiencia de Potasio

 
            </button>
            </a> <br />

            < Link to="/Lista_cultivos"> <button className="btn btn-lg btn-success  btn-block m-5" type="submit">
    Volver a Lista de cultivos </button>
       </Link>
       </div>
        </div>

    )
}