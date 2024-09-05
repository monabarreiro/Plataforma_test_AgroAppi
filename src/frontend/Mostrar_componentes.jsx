import {db} from '../backend/firebase';
import { useState,useEffect } from 'react'; 
import{getDocs, collection} from "firebase/firestore";
import "./mostrar_componentes.css";


var Descripcion = " ";
import { useParams } from 'react-router-dom';

export const Mostrar_componentes= () =>{
    const [datos, setData] = useState([]);
    const [descripcion, setDescripcion] = useState([]);
    const [arrayImg, setArrayImg] = useState([""]);
    var {id,cultivos} = useParams();
    const replaceEncodedSpaces = (str) => {
      return str.replace(/%20/g, ' '); // regular expression abreviation regex 
    };
    id =replaceEncodedSpaces(id);
    console.log(cultivos);
    useEffect(() => {
      
      const buscarImg2 = async () => {
        try {
          console.log(cultivos); 
            const querySnapshot = await getDocs(collection(db,'bd_enfermedades_'+ cultivos));
            
            if (!querySnapshot.empty) {
              const cultivosList = querySnapshot.docs.map(doc => doc.data())

             let TituloEnfermedad= " ";
            
                cultivosList.forEach((cultivo) => {
                 if (cultivo.Titulo==id){
                   TituloEnfermedad=cultivo.Titulo;
                   setData(TituloEnfermedad ||""); //quiere decir que en caso que no encuente
                   //el TituloEnfermedad va a ser un string vacío (or)||.
                   Descripcion=cultivo.a
                  setArrayImg(cultivo.arrayImg ||"");
        
                   setDescripcion(Descripcion ||"");
                 }
                });
                
            } else {
                console.log('No se encontraron documentos en la colección $ {textoFiltrado}');
            }
        } catch (error) {
            console.error("Error al buscar documentos:", error);
        }
    }; 
    buscarImg2();

   
    }, []);
   return (<div>

<h1>
   {datos} 
</h1>
<p>
{descripcion}
</p>
{ arrayImg.map((cultivo, index) => (
          <div key={index} className="float-right" target="blank"> 
           
<img src={cultivo} className="mx-auto"/>
   

</div>
))}
<img src={"https://herbariofitopatologia.agro.uba.ar/wp-content/uploads/2016/03/Huang-et-al-2013-truncatum.jpg?v=1627993886"} className="float-right"/>
   </div> )
}