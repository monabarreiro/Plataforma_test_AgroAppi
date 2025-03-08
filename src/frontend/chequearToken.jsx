import  { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../backend/firebase';
import { getIdToken } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './token';
import{NavBar} from './NavBar';
export const ChequearToken = () => {
    const auth = getAuth(app);
    const { token } = useAuth();
    const [inputToken, setInputToken] = useState('');
    const navigate= useNavigate();


const chekToken =  () => {  // chequea si el token ingresado es correcto
    if (inputToken === token) {
        alert('Token correcto');
        navigate('/Pagina_admin');// redirige a la pagina de administrador
    } else {
        alert('Token incorrecto');
    }

}
    return (
        <div>
            <NavBar/> {/* barra de navegacion */}
            <br />
            <br />
            <br />
            <br />
            <br />

            <form className ="form-signin" onSubmit = {chekToken}>
    

    <label htmlFor="inputName"  className="sr-only m-2 fw-bold"><h3>Chequeo de Token</h3></label>
    <input    type ="text" id="inputName" className="form-control" 
    value= {inputToken} onChange={(e) =>
                 setInputToken(e.target.value)}
    placeholder="Ingrese el Token" required autoFocus />
   
    
    <div className="checkbox">

    </div>
   
    <button className="btn btn-lg btn-success btn-block m-2" type="submit">
    Chequear Token
    </button>
 
  </form>
           
        </div>
    );
}