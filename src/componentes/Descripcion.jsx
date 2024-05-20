import jarra from "../img/jarra.jpg";
import trigo_presentado from "../img/trigo_presentado.jpg";
import uvita from "../img/uvita.jpg";
import maiz from "../img/maiz.jpg";

export const DescLimon = ()=> {
return (  
    <div>
<h1 className ="m-5">
    El cultivo de los cítricos como el Limón 
</h1>
   <img src = {jarra} className= "m-5"/> 
   
  <p className = " m-5 ">
  El Limón, es la denominación que damos en américa latina a dos especies de plantas del género    <br />
  Citrus (Citrus aurantifolia o Citrus limón) y a sus variedades. <br />
  Ha sido considerado uno de los frutos más prodigiosos que haya podido existir en el viejo mundo. <br />

    En particular los griegos y romanos del primer siglo ya le denominaban “la manzana de oro”, <br />
    al limón verdadero (citrus limon); debido a que entre otras cosas, la medicina de la época podían curar y 
    tratar más de 100 enfermedades con él. <br />

En la actualidad el limón ha teniendo auge productivo. <br />
Esto gracias a sus facilidades de adaptación y manejo productivo en la región intertropical y tropical; <br />
donde puede producirse durante todo el año. Estimaciones de la FAO (FAOSTAT) <br />
consideran que la producción de limas y limones supero los 20 millones de toneladas desde el 2019. <br />
  </p>
    </div>
  )
};

export const DescTrigo = ()=> {
    return (  
        <div>
    <h1 className ="m-5">
        El cultivo del Trigo 
    </h1>
       <img src = {trigo_presentado} className= "m-5"/> 
       
      <p className = " m-5 ">
      El trigo es una planta gramínea anual con espigas. <br />
      Es decir, se trata de una especie de pasto. <br />
      Su altura es variable, va desde treinta centímetros hasta un metro y medio de largo. <br />
      El tallo, recto, cilíndrico, da unas hojas largas y finas que terminan en forma de lanza, <br />
      por lo que se les llama lanceoladas. <br />
      Ha sido considerado uno de los frutos más prodigiosos que haya podido existir en el viejo mundo. <br />
    
        
      </p>
        </div>
      )
    };
    
    export const DescUva = ()=> {
      return (  
          <div>
      <h1 className ="m-5">
          El cultivo de la vid y la Uva de Mesa 
      </h1>
         <img src = {uvita} className= "m-5"/> 
         
        <p className = " m-5 ">
        La vid es una planta procedente de Asia. <br />
        Se empezó a cultivar en el Cáucaso hace 7000 años y <br />
        fue introducida en España por los fenicios. <br />
        Los primeros cultivos en España están documentados en Cádiz <br />
        y datan aproximadamente del 1100 a.C.
        </p>
          </div>
        )
      };
      
      export const DescMaiz = ()=> {
        return (  
            <div>
        <h1 className ="m-5">
            El cultivo del Maíz
        </h1>
           <img src = {maiz} className= "m-5"/> 
           
          <p className = " m-5 ">
          El maíz, pertenece a la familia de las Poáceas o Gramíneas <br />
        y es uno de los granos alimenticios más antiguos que se conocen, <br /> 
        es una planta domesticada y altamente productiva que no crece en forma salvaje <br />
        por lo que es completamente dependiente de los cuidados del hombre.
          
            
          </p>
            </div>
          )
        };
        
        
    