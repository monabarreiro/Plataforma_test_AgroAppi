
import { app } from "./firebase";   
import { getAuth } from '../../node_modules/firebase/auth';
import { signInWithEmailAndPassword } from '../../node_modules/firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  


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
      
      console.log("Login exitoso");
      if(email=='monicabarreiro@gmail.com'){
        console.log("sos Administrador");
      }
      navigate("/Lista_cultivos");
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };
// Formulario para completar 
    return(
      <div className="container">
        <h2 className="form-signin-heading"> Por favor inicie sesión </h2>
       
      <form className ="form-signin" onSubmit = {handleLogin}>
    

        <label htmlFor="inputName"  className="sr-only">email</label>
        <input value ={email}  onChange={(e) => setEmail(e.target.value)} type ="text" id="inputName" className="form-control" placeholder="email" required autoFocus />
       
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input value ={password}  onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox">
 
        </div>
       
        <button className="btn btn-lg btn-primary btn-block" type="submit">login
       </button>
     
      </form>
    </div>
)
};


