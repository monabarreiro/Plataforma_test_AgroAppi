import {db} from "../backend/firebase"; 
import { collection, addDoc } from 'firebase/firestore';
import { useState } from "react";
import Swal from "sweetalert2";[useState];
import {getDocs } from 'firebase/firestore';
import {useEffect} from'react';
import { NavBar } from "./NavBar";  
import "./pagina_admin.css";
import {ref} from "firebase/database";
import {doc,deleteDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";





export const Pagina_admin = ()=>{
  const [mensajes, setMensajes] = useState([]);
  
    const [cultivo, setCultivo] = useState("");
    const [img, setImg] = useState("");
    const [listadoCultivos, setListadoCultivos] = useState([]);
    const [enfermedad, setEnfermedad] = useState("");
    const [a, setA] = useState("");
    const [arrayImg, setArrayImg] = useState([""]);
    const [cultivo2, setCultivo2] = useState("");
    const [idCultivo, setIdCultivo] = useState("");
    const [agroquimicas,setAgroquimicas] = useState("");
    const [biologicas,setBiologicas] = useState("");
    const [enfermedades,setEnfermedades] = useState([]); // para definir el array
    const [seleccionarEnfermedad, setSeleccionarEnfermedad]= useState("");
    const [valor, setValor] = useState(""); // para definir el valor
    const [idEnfermedad, setIdEnfermedad]= useState([]);
    const navigate = useNavigate();
    const [paginaActual, setPaginaActual] = useState(1);
    const [postsPorPagina] = useState(4);// cuantos posts por pagina
    const [paginasTotales,setPaginasTotales] = useState(0);// cuantas paginas totales
    const [paginaActualCultivos,setPaginaActualCultivos] = useState(1);
    const [postsPorPaginaCultivos] = useState(2);// cuantos posts por pagina
    const [paginasTotalesCultivos,setPaginasTotalesCultivos] = useState(4);// cuantas paginas totales
    const [paginaActualEnfermedades,setPaginaActualEnfermedades] = useState(1);
    const [postsPorPaginaEnfermedades] = useState(4);// cuantos posts por pagina
    const [paginasTotalesEnfermedades,setPaginasTotalesEnfermedades] = useState(0);// cuantas paginas totales
  
   
    
    const ModificarEnfermedad= async (id)=>{
      try {
        var Titulo = prompt("ingrese nombre de enfermedad ya modificada")
        var a = prompt("ingrese descripción")
        await deleteDoc(doc(db, 'bd_enfermedades_'+ seleccionarEnfermedad.toLowerCase(), id));
        const ref = collection(db, 'bd_enfermedades_'+ seleccionarEnfermedad.toLowerCase());
        await addDoc(ref, {Titulo,a});
        alert("Modificado exitosamente");
        buscarImg2();
        window.location.reload();
      } catch (error) {
        alert("Error al modificar enfermedad" + error.message);
      }
    } ;
    const ModificarCultivo= async (id)=>{
     
      try {
      var cultivo = prompt("ingrese nombre de cultivo")
      var img = prompt("ingrese imagen")
    
      await deleteDoc(doc(db, 'cultivos', id)); 
      const ref = collection(db, "cultivos");
      await addDoc(ref, {cultivo, img});
      alert("Modificado exitosamente");
      window.location.reload();

      
     } catch (error) {
      alert("Error al modificar cultivo" + error.message);
     }
      
    } ;
    const BorrarEnfermedad= async(id)=>{ // selectivamente es asyncronico
      try {
        if(prompt("Si desea borrar esta enfermedad escriba si")=="si"){
          await deleteDoc(doc(db, 'bd_enfermedades_'+ seleccionarEnfermedad.toLowerCase(), id));  
          alert("borrado exitosamente");
          buscarImg2();
          window.location.reload();
        }

      } catch (error) {console.log(error); 
        
      }
    }
    const BorrarCultivo= async(cultivos)=>{ // selectivamente es asyncronico
      try {
        if(prompt("Si desea borrar este cultivo escriba si")=="si"){
          await deleteDoc(doc(db, 'cultivos', cultivos));  
          alert("borrado exitosamente");
          window.location.reload();
        }

      } catch (error) {console.log(error); 
        
      }
    }
    const aniadirLink = ()=>{
        setArrayImg([...arrayImg,""]);
    }
   
   
    useEffect(() => {
      const q = collection(db, "messages");
  
      const unsubscribe = onSnapshot (q, (snapshot) => {
        let newMessages = [];
        snapshot.forEach((doc) => {
          newMessages.push({ id: doc.id, ...doc.data() });
        });
        setPaginasTotales(Math.ceil(newMessages.length / postsPorPagina));
        setMensajes(newMessages);
      
      });
  
      return () => unsubscribe(); // Cleanup function to prevent memory leaks
    }, []);

    const indexUltimoMensaje = paginaActual * postsPorPagina;
    const indexPrimerMensaje = indexUltimoMensaje - postsPorPagina;
    const mensajesActuales = mensajes.slice(indexPrimerMensaje, indexUltimoMensaje);
    const paginate = (pageNumber) => setPaginaActual(pageNumber);
    const handleArray=(index,event)=>{
    const newLinks = [...arrayImg];
    newLinks[index] = event.target.value;
    setArrayImg(newLinks);

     }
     const removeAccents=(str) => {
      const accents = {
          'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
          'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
          'ñ': 'n', 'Ñ': 'N'
      };
      
      return str.split('').map(char => accents[char] || char).join('');
  }

     const buscarCultivo = async () => {
      
      try {
        var temp =removeAccents('cultivos');
          const querySnapshot = await getDocs(collection(db,temp));
          
          if (!querySnapshot.empty) {
              const cultivosList = querySnapshot.docs.map(doc => ({
                id: doc.id, 
                ...doc.data()
              }));
   // console.log(cultivosList);
  // cultivosList: nos devuelve un array de cultivos
              // Verifica que cultivosList no esté vacío
              // Borrar array y pushear todas las enfermedades
             setIdCultivo([]);
                 

              setListadoCultivos([]);
              cultivosList.forEach((cultivo) => {
             
              setIdCultivo((ListaCultivos) => [...ListaCultivos,cultivo.id]);
          
              setListadoCultivos((ListaCultivos) => [...ListaCultivos,cultivo.cultivo]);
             setPaginasTotalesCultivos(Math.ceil(cultivosList.length / postsPorPaginaCultivos));
            });

             // const CultivosRef = sRef (db,'cultivos/'+ "Pirulo"); // esta harcodeado para probar funcion
      // aca tenemos que copiar el id del db de firebase.
            //  alert(CultivosRef); //no esta leyendo esta alert
              //console.log(idCultivo);
          } else {
              console.log('No se encontraron documentos en la colección $ {textoFiltrado}');
          }
      } catch (error) {
          console.error("Error al buscar documentos:", error);
      }
  };
     buscarCultivo();
     const indexUltimoCultivo = paginaActualCultivos * postsPorPaginaCultivos;
     const indexPrimerCultivo = indexUltimoCultivo - postsPorPaginaCultivos;
     const cultivosActuales = listadoCultivos.slice(indexPrimerCultivo, indexUltimoCultivo);
     const paginateCultivos = (pageNumber) => setPaginaActualCultivos(pageNumber);

    const crearCultivo = async (cultivo, img) => {
        const ref = collection(db, "cultivos");
        await addDoc(ref, {cultivo, img});
      Swal.fire({icon:"success", title:"Cultivo creado con éxito"});


    };
 
    const crearEnfermedad = async (cultivo,Titulo, a, arrayImg) => {
    const cultivoFiltrado=removeAccents(cultivo.toLowerCase());
      const concat = "bd_enfermedades_"+ cultivoFiltrado;
        const ref = collection(db, concat);
        await addDoc(ref, {Titulo,a, arrayImg});
      Swal.fire({icon:"success", title:"Enfermedad agregada con éxito"});
      buscarImg2();
    };
    const buscarImg2 = async () => {
      try {
        var temp =removeAccents('bd_enfermedades_' + seleccionarEnfermedad.toLowerCase());
         
      
          const querySnapshot = await getDocs(collection(db,temp));
          
          if (!querySnapshot.empty) {
            const cultivosList = querySnapshot.docs.map(doc => ({
              id: doc.id, 
              ...doc.data()
            }));
  
              // Verifica que cultivosList no esté vacío
              // Borrar array y pushear todas las enfermedades 
              setEnfermedades([]);
              setIdEnfermedad([]);
        
              cultivosList.forEach((cultivo) => {
                setIdEnfermedad((id) => [...id,cultivo.id]);
                setEnfermedades((enfermedades2) => [...enfermedades2,cultivo.Titulo]);
              });
              
          } else {
              console.log('No se encontraron documentos en la colección $ {textoFiltrado}');
          }
      } catch (error) {
          console.error("Error al buscar documentos:", error);
      }
  };

  const CambioDeCultivo=(event)=>{
    setValor(event.target.value);

    var value = event.target.value;
    setSeleccionarEnfermedad(removeAccents(value));  

  }
  const auth = getAuth();
 

  onAuthStateChanged(auth,(user) => {
    
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid; // codigo id unico de usuario
      
      // ...
   if(uid !="XLoHa1Ab8lX67SEAjyN4Qe5vjCA2"){  // si el usuario no es administrador
    // access key 

    alert("No tienes permisos para acceder a esta página");
    navigate("/Lista_cultivos");
   }
     else {
      // User is signed out
      // ...
      
    }}
    
    });
  useEffect(() => {

    buscarImg2();
}, [seleccionarEnfermedad])

   // crearCultivo("cultivos");
    return(
        <div>
           <NavBar className="navBar"/>
           <br />
           <br />
           <br />
       
    
        <div className= "bg-dark">
            <h3 className="mt-4 "> Crear cultivo</h3>
          

 <table className="table table-dark">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Nombre Cultivo</th>
      <th scope="col">Imagen</th>
      <th scope="col">Boton</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="text"
                placeholder="Nombre del cultivo"
                value={cultivo}
                onChange={(e) => setCultivo(e.target.value)} >

                </input></td>
      <td> <input type="text"
                placeholder="URL de la imagen"
                value={img}
                onChange={(e) => setImg(e.target.value)} ></input></td>
      <td>   <button className="btn btn-warning"  onClick={() => crearCultivo(cultivo,img)}>
                    Crear cultivo
                </button></td>
    </tr>

  </tbody>
</table>
</div>

<h3 className="mt-5">Crear Enfermedad</h3>

<table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Nombre Cultivo</th>
      <th scope="col">Nombre de la enfermedad</th>
      <th scope="col">Descripción de enfermedad</th>
      <th scope="col">URL de Imágenes</th>
      <th scope="col">Botones</th>
    </tr>
  </thead>
  <tbody>

    <tr>
     
      <td><input type="text"
                placeholder="Nombre del cultivo"
                value={cultivo2}
                onChange={(e) => setCultivo2(e.target.value)} >

                </input></td>
      <td>  <input type="text"
                placeholder="Nombre de la enfermedad"
                value={enfermedad}
                onChange={(e) => setEnfermedad(e.target.value)} >
                </input></td>

      <td>       <input type="text"
                placeholder="Descripción de enfermedad"
                value={a}
                onChange={(e) => setA(e.target.value)} ></input></td>

<td>     {arrayImg.map((link, index) => (
        <div key={index}>

          <input
            type="url"
            value={link}
            onChange={(event) => handleArray(index,event)}
            style={{marginLeft:"20px"}}
         
          />
        </div>
      ))}  </td>



<td>     <button onClick={aniadirLink}>
  Añadir Fotos
</button>
<button onClick={()=> crearEnfermedad(cultivo2,enfermedad,a,arrayImg)}>
    Crear enfermedad
</button></td>
    </tr>
    </tbody>  

    <th scope="col">Soluciones Agroquimicas</th>
    <th scope="col">Soluciones Biológicas</th>
    <th scope="col">URL de Imágenes</th>
    <th scope="col">Botones</th>
    
    <tbody>

<tr>
  
<td><input type="text"
            placeholder="Solución Agroquímica"
            value={agroquimicas}
            onChange={(e) => setAgroquimicas(e.target.value)} >

            </input></td>
            <td><input type="text"
            placeholder="Solución Biológica"
            value={biologicas}
            onChange={(e) => setBiologicas(e.target.value)} >

            </input></td>
                
<td>     {arrayImg.map((link, index) => (
        <div key={index}>
          <input
            type="url"
            value={link}
            onChange={(event) => handleArray(index,event)}
           
          />
        </div>
      ))}     </td>

<td>     <button onClick={aniadirLink}>
Añadir Fotos
</button>
<button onClick={()=> crearEnfermedad(cultivo2,enfermedad,a,arrayImg)}>
Crear enfermedad
</button></td>
</tr>
</tbody>  


</table>


<div className="bg-dark">

            <h3 className="mt-5"> Visualizar Cultivos </h3>
      <div className= "m-4 ">

 <table className="table table-dark">
     
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre del Cultivo</th>
      <th scope="col">Modificar Cultivo</th>
      <th scope="col">Borrar Cultivo</th>
    </tr>
  </thead>

  <tbody>
    
    {cultivosActuales.map((point, index) => {
            return <tr key={index}>
      <th scope="row">{index}</th>
      <td><h2>{point.charAt(0).toUpperCase() + point.slice(1)}</h2></td>

      <td><button type="button" className="btn btn-primary" value={idCultivo[index]}
            onClick={(event) => {
              ModificarCultivo(event.target.value);
           }
          } data-toggle="modal" data-target=".bd-edit-modal-lg" 
            >Modificar Cultivo</button></td>

      <td><button type="button" className="btn btn-success"
             data-toggle="modal" data-target=".bd-crite-modal-lg"
             value={idCultivo[index]}

             onClick={ (event)=>{BorrarCultivo(event.target.value)}} 
            >Borrar</button></td>
    </tr>
            
        })
    }
    {
  paginasTotalesCultivos > 1 ? (
    <div className="pagination">
      {Array.from({ length: paginasTotalesCultivos }).map((_, index) => (
        <button key={index} onClick={() => paginateCultivos(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  ) : null
    }
  </tbody>
</table>

<select name=" " id =" " value={valor} onChange={(event) => CambioDeCultivo(event)}>
  <option value="">Todos los Cultivos</option>
  {listadoCultivos.map((cultivo, index) => (
          <option key={index} value={cultivo}>{cultivo}</option>
        ))}
</select>

 <table className="table table-dark">
     
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre de la Enfermedad </th>
      <th scope="col">Modificar Enfermedad </th>
      <th scope="col">Borrar Enfermedad</th>
    </tr>
  </thead>

  <tbody>
    
    {enfermedades.map((point, index) => {
            return <tr key={index}>
      <th scope="row">{index}</th>
      <td><h2>{point.charAt(0).toUpperCase() + point.slice(1)}</h2></td>

      <td><button type="button" className="btn btn-primary" 
            onClick={() => {
              ModificarEnfermedad(idEnfermedad[index]);
           }
          } data-toggle="modal" data-target=".bd-edit-modal-lg" 
            >Modificar Enfermedad </button></td>

      <td><button type="button" className="btn btn-success"
             data-toggle="modal" data-target=".bd-crite-modal-lg" 
              onClick={()=>{BorrarEnfermedad(idEnfermedad[index])}} 
            >Borrar</button></td>
    </tr>
            
        })
    }
  </tbody>
</table>
<table className="table table-dark">
<thead className="thead-dark">
    <tr>
      
      <th scope="col">Nombre</th>
      <th scope="col">mail</th>
      <th scope="col">mensaje</th>
    </tr>
  </thead>
  <tbody>
  {
  mensajesActuales.map((mensaje, index) => {
    return <tr

    key={index}>
      <td>{mensaje.name}</td>
      <td>{mensaje.email}</td>
      <td>{mensaje.message}</td>
    </tr>
  })
}
{
  paginasTotales > 1 ? (
    <div className="pagination">
      {Array.from({ length: paginasTotales }).map((_, index) => (
        <button key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  ) : null
}
  </tbody>

</table>

        </div>
        </div>
        </div>
    )
}


