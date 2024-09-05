import { Link } from "react-router-dom";

import img1 from "../img/limon.jpg";
import img2 from "../img/maiz.jpg";
import img3 from "../img/uva.jpg";
import img4 from "../img/trigo.jpg";

import "../Main.css";





export const Prueba = (cultivo)=> {
  // esto seria de firebase : cultivos,cultivo,img 

    let img= cultivo.img;
    let nombre = cultivo.nombre;
    let descripcion="/Desc"+ nombre;
    let enfermedades="/Menu/" + nombre;

   // let lista_cultivos = [img1, img2, img3, img4];
   // let array_desc = ["/DescLimon", "/DescMaiz", "/DescUva", "/DescTrigo"];
   // let array_enfermedades = ["/Menu_Citricos", "/Menu_Maiz", "/Menu_Uva", "/Menu_Trigo"];
    return(

       <div className= "col-6">

        <div>
                    
            <h2 className ="m-5 text-center"  >
              {cultivo.nombre}
            </h2>
            <Link to= {descripcion}>

            <img src= {img}  style = {{width:"351px",height:"284px", display: "block", marginLeft: "auto", marginRight: "auto" }} alt="" /> 
            </Link>
             </div>
             <div className= "p-1 m-4 mt-1 text-center">

            
             <Link  to= {enfermedades} > <button className="p-1 m-4 mt-1 btn-btn text-center">
                Enfermedades {cultivo.nombre}
             </button> </Link>
             </div>

             </div>
    )
};
