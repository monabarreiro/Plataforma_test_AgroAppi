import { useAuth } from "./token";
import{useNavigate} from "react-router-dom";
import { NavBar } from "./NavBar";

export const GeneradorToken = () => {
  const { user, token } = useAuth();
  const navigate= useNavigate();
    const copyToken = async () => {
        try {
        await navigator.clipboard.writeText(token);
        alert('Token copiado exitosamente');
        navigate('/ChequearToken');
        } catch (err) {
        console.log(err);
        }
    };
    
  return (
    <div>
      <NavBar/>
      <br />
      <br />
      <br />
      <br />
      <h3> Generador de Token </h3>
    
      <button onClick={copyToken}> Copiar Token </button>
   <br />
   <br />
      <textarea style ={{wordWrap: 'break-word', fontSize: '10px', overflowWrap: 'break-word', 
      width: '50%', height: '50%'}}
      >{token}
      </textarea>
    </div>
   
  );
}