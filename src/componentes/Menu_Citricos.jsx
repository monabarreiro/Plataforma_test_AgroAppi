import { Link } from "react-router-dom"
import img8 from "../img/limon_para_enf.jpg"
import "./Menu.css";

export const Menu_Citricos=()=> {
    return (
        <div className="container">

            <div> 
                <h2 className= "m-3">

                    Enfermedades del Limón <br/>
                    <img src={img8} alt="" width={"200px"} />

                </h2>
            </div>

            <div className= "row align-items-start">
            <a className="col-4" href="http:///herbariofitopatologia.agro.uba.ar/?page_id=280" target="blank"> <button className="btn btn-lg btn-warning btn-block m-3" type="texto">
               Antracnosis de los cítricos en frutos y hojas 

             </button>

             </a> <br />  

    <a className="col-4"  href="https://herbariofitopatologia.agro.uba.ar/?page_id=12058" target="blank">
<button className="btn btn-lg btn-warning btn-block m-3" type="texto">
             Acaro de las yemas

             </button>
   
    </a>  <br /> 

    <a className="col-4"  href="https://herbariofitopatologia.agro.uba.ar/?page_id=2825"target="blank">
<button className="btn btn-lg btn-warning btn-block m-3" type="texto">
             Clorosis en cítricos por desbalance nutricional


             </button>
             </a>  <br /> 

    <a  className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=284"target="blank">
<button className="btn btn-lg btn-warning btn-block m-3" type="texto">
             Cancrosis de los cítricos

             </button>
             </a>  <br /> 


             <a  className="col-4" href="https://herbariofitopatologia.agro.uba.ar/?page_id=302"target="blank">
<button className="btn btn-lg btn-warning btn-block m-3" type="texto">
              Mancha Negra
             

             </button>
             </a>  <br /> 

             <a className="col-4"  href="https://herbariofitopatologia.agro.uba.ar/?page_id=12077"target="blank">
<button className="btn btn-lg btn-warning btn-block m-3" type="texto">
             Cochinilla de los cítricos
             

             </button>
             </a>  <br /> 

 
             <a href="https://herbariofitopatologia.agro.uba.ar/?page_id=710"target="blank">
<button className="btn btn-lg btn-warning btn-block m-3" type="texto">
HLB HuangLongBing  <br /> La enfermedad más grave para los cítricos
             

             </button>

             </a>  <br /> 

            < Link to="/Lista_cultivos"> <button className="btn btn-lg btn-success  btn-block m-5" type="submit">
    Volver a Lista de cultivos </button>
       </Link>
        </div>
        </div>
    )
       
    }

