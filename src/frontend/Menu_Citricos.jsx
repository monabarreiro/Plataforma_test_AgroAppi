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
           
            <Link to="/Mostrar_componentes/atracnosis" className="col-4" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto" 
             >
               Antracnosis de los cítricos en frutos y hojas 

             </button>
                </Link>
             <br />  

             <Link to="/Mostrar_componentes/acaros" className="col-4" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto" 
             >
               Acaro de las yemas 

             </button>
                </Link>
   
     <br /> 

     <Link to="/Mostrar_componentes" className="col-4" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto" 
             >
             Clorosis en cítricos 

             </button>
                </Link>
    <br /> 

    <Link to="/Mostrar_componentes" className="col-4" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto" 
             >
               Cancrosis de los cítricos 

             </button>
                </Link>
    <br /> 


    <Link to="/Mostrar_componentes" className="col-4" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto" 
             >
             Mancha Negra

             </button>
                </Link>
    <br /> 

    <Link to="/Mostrar_componentes" className="col-4" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto" 
             >Cochinilla de los Cítricos

             </button>
                </Link>
    <br /> 

 
    <Link to="/Mostrar_componentes" className="col-4" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3" type="texto" 
             >
               HLB HuangLongBing La enfermedad más peligrosa para los cítricos,<br/>

               ya que no tiene cura. Sí, se puede prevenir. 

             </button>
                </Link>
    <br /> 

            < Link to="/Lista_cultivos"> <button className="btn btn-lg btn-success  btn-block m-5" type="submit">
    Volver a Lista de cultivos </button>
       </Link>
        </div>
        </div>
    )
       
    }

