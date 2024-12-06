
import { NavBar } from './NavBar';
import {app} from '../backend/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

import img12 from "../img/logoagroappi.png";


//import '../../node_modules/firebase/auth';
//import '../../node_modules/firebase/database';


 export const Logout =()=>{   // ver esta variable   //
  return ("../Register.jsx")
}
  

 export const Register =()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  console.log(error);

  const auth = getAuth(app);
    
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully!');
    } catch (error) {
      setError(error.message);
    } 
  }

  // Formulario para completar
    return(
     
      <div className="">
      <NavBar/>
        <img src={img12} alt="" width={"100px"} />

      <form className="form-signin" onSubmit={handleSignUp}>
        <h2 className="form-signin-heading fw-bold">Por favor regístrese: </h2>
        <label htmlFor="inputName" className="sr-only fw-bold m-1">
          Nombre
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="Nombre"
          required
          autoFocus
        />

        <label htmlFor="inputEmail" className="sr-only fw-bold m-1">
          Direccion de email
        </label>
        <input
          type="email"
          value={email}
          id="inputEmail"
          onChange={
            (e) => setEmail(e.target.value)
          }
          className="form-control"
          placeholder="direccion email"
          required
          autoFocus
        />

        <label htmlFor="telefono" className="sr-only fw-bold m-1">
          Telefono
        </label>
        <input
          type="text"
          id="telefono"
          className="form-control"
          placeholder="Telefono"
          required
          autoFocus
        />

        <label htmlFor="inputPassword" className="sr-only fw-bold m-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          id="inputPassword"
          onChange={
            (e) => setPassword(e.target.value)
          }
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" className="mt-3" />{" "}
            Recordame
          </label>
        </div>
          <button
            className="btn btn-lg btn-primary btn-block mt-3"
            type="submit"
          
          >
            Sign in
          </button>
      
      </form>
    </div>
  );
};
