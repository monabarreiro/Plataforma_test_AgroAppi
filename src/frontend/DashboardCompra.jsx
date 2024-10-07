import  { useEffect, useState } from 'react';
import "./Dashboard.css";

export const DashboardCompra = () => {
  const [jsonContent, setJsonContent] = useState(null);// contenido de jason en esta var
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [arrayCarrito, setArrayCarrito] = useState([]);

  const pushArrayCarrito =(soluciones)=>{
    setArrayCarrito([...arrayCarrito, soluciones]); //...para copiar un array 
    // y para añadir productos por eso es arrayCarrito

    GuardarCarrito();
  };

  const SacarComillas = (texto) => {
    return texto.replace(/"([^"]+)"/g, '$1'); // quita las comillas dobles
  }
  const GuardarCarrito= () => {
    // guarda en el localstorage
    localStorage.setItem('carrito',JSON.stringify(arrayCarrito)); // es para guardar el array como String

  }
  useEffect(() => {
    const fetchJson = async () => {
      try {
        const response = await fetch('/Productos.json'); // Path relative to the public folder
      
        if (!response.ok) {
          throw new Error('Network response was not ok');
    
}
        const data = await response.json();
        setJsonContent(data);
  
      } catch (error) {
        console.error('Error fetching JSON file:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJson();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message}</p>;

  return (
    <div className= "row align-items-start">
  { jsonContent.array.map((soluciones,index) => (
    <div className= "col-3" key={index}>
      <h3>{SacarComillas(JSON.stringify(soluciones.nombre, null)) }</h3> {/* pasa de json a String*/}
      <h3>{SacarComillas(JSON.stringify(soluciones.marca, null)) }</h3>
      <h3>{SacarComillas(JSON.stringify(soluciones.descripcion, null)) }</h3>
      <h3>{SacarComillas(JSON.stringify(soluciones.precio, null)) }</h3>
      <h3>{SacarComillas(JSON.stringify(soluciones.cantidad, null)) }</h3>
      <img src={SacarComillas(JSON.stringify(soluciones.img, null)) }></img> {/* va link */} 
 {/* <button onClick= { ()=> pushArrayCarrito (soluciones)}>
    Agregar al Carrito
  </button>*/ }  {/* este boton lo comentamos porque agregamos 
  directamente los link para comprar en Mercado Libre */}
<button>

  <a  target='_blank'href={SacarComillas(JSON.stringify(soluciones.linkMercadoLibre, null))}> ir a Mercado Libre </a>   {/*este es el link para vincular a ML para la compra*/ }
  </button>
    </div>
  )

  )
      } 

      <h1> </h1>
      
    </div>
  );
};
