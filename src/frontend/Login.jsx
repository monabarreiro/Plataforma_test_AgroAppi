
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

      }
      navigate("/Lista_cultivos");
    } catch (err) {
      setError(err.message);
      alert(error);
    }
  };
  
// Formulario para completar 
    return(
      <div className="container">
        <NavBar/>
        <img src={img12} alt="" width={"100px"} />
        <h2 className="form-signin-heading"> Por favor inicie sesión </h2>
       
      <form className ="form-signin" onSubmit = {handleLogin}>
    

        <label htmlFor="inputName"  className="sr-only m-2 fw-bold">email</label>
        <input value ={email}  onChange={(e) => setEmail(e.target.value)} type ="text" id="inputName" className="form-control" placeholder="email" required autoFocus />
       
        <label htmlFor="inputPassword" className="sr-only m-2 fw-bold">Password</label>
        <input value ={password}  onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox">
 
        </div>
       
        <button className="btn btn-lg btn-primary btn-block m-2" type="submit">
          login
        </button>
     
      </form>
    </div>
)
};



