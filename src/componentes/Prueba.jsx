import { Link } from 'react-router-dom';

import img1 from "../img/limon.jpg";
import img2 from "../img/maiz.jpg";
import img3 from"../img/uva.jpg";
import img4 from"../img/trigo.jpg";





export const Prueba = (cultivo)=> {
    let lista_cultivos = [img1, img2, img3, img4];
    let array_desc = ["/DescLimon", "/DescMaiz", "/DescTrigo", "/DescUva"];
    return(

       <div className= "col-6">

        <div>
                    
            <h2 className ="m-5 text-center" >
              {cultivo.nombre}
            </h2>
            <img src= {lista_cultivos[cultivo.i]}  style = {{width:"351px",height:"284px", display: "block", marginLeft: "auto", marginRight: "auto" }} alt="" /> 
          
             </div>
             <div className= "p-1 m-4 mt-1 text-center">

            
             <Link  to= {array_desc[cultivo.i]} > <button className="p-1 m-4 mt-1 text-center">
                Enfermedades {cultivo.nombre}
             </button> </Link>
             </div>

             </div>
    )
};