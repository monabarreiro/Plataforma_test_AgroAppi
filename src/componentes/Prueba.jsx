import img1 from "../img/limon.jpg";
import img2 from "../img/maiz.jpg";
import img3 from"../img/uva.jpg";
import img4 from"../img/trigo.jpg";




export const Prueba = (cultivo)=> {
    let lista_cultivos = [img1, img2, img3, img4];
    return(

       <div>

        <div className= " bg-secondary w-25" >
            <img src= {lista_cultivos[cultivo.i]} className=" w-25 m-4" alt="" /> 
          
             </div>
             <button className="p-1 m-4 mt-1">
                Enfermedades {cultivo.nombre}
             </button>
             </div>
    )
};