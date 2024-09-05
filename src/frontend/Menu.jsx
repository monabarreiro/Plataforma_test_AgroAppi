import { Link } from "react-router-dom";
import "./Menu.css";
import {useParams} from "react-router-dom";
import { db } from "../backend/firebase";
import { getDocs,collection } from "firebase/firestore";
import { useEffect, useState } from "react";

 
export const Menu=()=> {
 const [img ,setImg] = useState("");
 const [enfermedades,setEnfermedades] = useState([]); // para definir el array
 const [textoFiltrado,setTextoFiltrado] = useState(""); // comillas porque es un String y no un array 
  let {id} = useParams();

  const removeAccents=(str) => {
  const accents = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
      'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
      'ñ': 'n', 'Ñ': 'N'
  };
  
  return str.split('').map(char => accents[char] || char).join('');
}

useEffect(() => {

  const buscarImg2 = async () => {
    try {
      var temp =removeAccents('bd_enfermedades_' + id.toLowerCase());
         setTextoFiltrado(temp);
         console.log(textoFiltrado); 
        const querySnapshot = await getDocs(collection(db,temp));
        
        if (!querySnapshot.empty) {
            const cultivosList = querySnapshot.docs.map(doc => doc.data());

            // Verifica que cultivosList no esté vacío
            // Borrar array y pushear todas las enfermedades 
            setEnfermedades([]);
            cultivosList.forEach((cultivo) => {
              console.log(enfermedades);
              console.log(cultivo);
              setEnfermedades((enfermedades2) => [...enfermedades2,cultivo.Titulo]);
            });
            
        } else {
            console.log('No se encontraron documentos en la colección $ {textoFiltrado}');
        }
    } catch (error) {
        console.error("Error al buscar documentos:", error);
    }
};

  buscarImg2();

    
const buscarImg = async () => { // busca en la base de datos como link la imagen
      const querySnapshot = await getDocs(collection(db, 'cultivos'));
      const cultivosList = querySnapshot.docs.map(doc => doc.data());
//filtra el que tenga el nombre cultivos==id

const filteredCultivosList = cultivosList.filter(cultivo => cultivo.cultivo == id);

      setImg(filteredCultivosList[0].img);
    };
    buscarImg ();
  
  }, []);  // para que refresque componentes en tiempo real son los corchetes 

    return (
        <div className="container">

            <div> 
                <h2 className= "m-3">

                    Enfermedades de {id} <br/>
                    <img src={img} alt={img} width={"200px"} />

                </h2>
            </div>

            <div className= "row align-items-start">
            { enfermedades.map((cultivo, index) => (
          <div key={index} className="col-4" target="blank"> 
           <Link to={`/Mostrar_componentes/${cultivo}/${removeAccents(id.toLowerCase())}`} 

           className="col-4" target="blank"> 
            <button className="btn btn-lg btn-warning btn-block m-3">
                {cultivo}
             </button> </Link>
        
            
          </div>
        ))}

        

            < Link to="/Lista_cultivos"> <button className="btn btn-lg btn-success  btn-block m-5" type="submit">
    Volver a Lista de cultivos </button>
       </Link>
        </div>
        </div>
    )
       
    }

