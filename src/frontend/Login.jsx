
import { app } from "../backend/firebase";   
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { NavBar } from './NavBar';
import img12 from"../img/logoagroappi.png";


export const Login =()=>{
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);// 
  const navigate= useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      
      alert("Login exitoso");
      if(email =='monicabarreiro@gmail.com' && password == '123456'){
        alert("Sos Administrador");
        navigate("/GeneradorToken");    
        return;

      }
      navigate("/Lista_cultivos");
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  };
  
// Formulario para completar 
    return(
      <div>
        <NavBar/>
        <img src={img12} alt="" width={"100px"} />
        <br />
        <br />
        <h2 className="form-signin-heading"> Por favor inicie sesión </h2>
       
      <form className ="form-signin" onSubmit = {handleLogin}>
    

       
        <input value ={email}  onChange={(e) => setEmail(e.target.value)} type ="text" id="inputName" className="form-control" placeholder="email" required autoFocus />
       
       
        <input value ={password}  onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox">
 
        </div>
       
        <button className="btn btn-lg btn-primary btn-block m-2" type="submit">
          login
        </button>
     
      </form>
      <button>
        <a href="/RecuperoContraseña">Olvidé mi contraseña</a>
      </button>
    </div>
)
};



