import { db } from '../backend/firebase';
import { getDoc, doc } from "firebase/firestore";
import { useState,useEffect } from 'react'; 
var Titulo = " ";
var Descripcion = " ";
import { useParams } from 'react-router-dom';

export const Mostrar_componentes= () =>{
    const [datos, setData] = useState([]);
    const [descripcion, setDescripcion] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      async function showTitulo() {
        // Referencia al documento
        const boatRef = doc(db, "bd_enfermedades_limon/" + id);
        try {
          // Obtener el snapshot del documento
          const docSnap = await getDoc(boatRef);
          if (docSnap.exists()) {
            // Extraer y mostrar el campo 'titulo'
           
            Titulo = docSnap.data().Titulo;
            setData(Titulo ||"");
            Descripcion= docSnap.data().a
            setDescripcion(Descripcion ||"");

            // Actualizar la UI si es necesario
            // document.getElementById("titulo").innerText = docSnap.data().titulo;
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }
      }
      showTitulo();
   
    }, []);
   return (<div>

<h1>
   {datos} 

</h1>
<p>
{descripcion}
</p>
   </div> )
}