import  { useEffect, useState } from 'react';

export const DashboardCompra = () => {
  const [jsonContent, setJsonContent] = useState(null);// contenido de jason en esta var
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='' >
      <h1> </h1>
      <pre>{JSON.stringify(jsonContent.nombre, null )}</pre> {/* pasa de json a String*/}
      <pre>{JSON.stringify(jsonContent.marca, null )}</pre>
      <pre>{JSON.stringify(jsonContent.descripcion, null )}</pre>
      <pre>{JSON.stringify(jsonContent.precio, null )}</pre>
      <pre>{JSON.stringify(jsonContent.cantidad, null )}</pre>
      <img src={JSON.stringify(jsonContent.img)}></img> {/* va link */} 
  
    </div>
  );
};
