
import { NavBar } from './NavBar';
import {app} from '../backend/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


import img12 from "../img/logoagroappi.png";


//import '../../node_modules/firebase/auth';
//import '../../node_modules/firebase/database';


 export const Logout =()=>{   // ver esta variable   //
  return ("../Register.jsx")
}
  

 export const Register =()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  console.log(error);
  const navigate = useNavigate();

  const auth = getAuth(app);
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
const validatePhone = (phone) => {
  const regex = /^\d{4}-?\d{4}$/;
  return regex.test(phone);
};
const validatePassword = (password) => {
  if (password.length < 6 || password.length > 20) {
    alert('Password debe tener por lo menos 6 caracteres y menos de 20');
    return false;
  }
  return true;
};

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');



    if (!validateEmail(email)) {
      alert('Invalid email');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password inválido');
      return;
    }
    if (!validatePhone(phone)) {
     alert("Numero Inválido" + phone);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Usuario creado exitosamente ');
      navigate("/Login");

    } catch (error) {
     alert(error.message);
    } 
  }

  // Formulario para completar
    return(
     
      <div className="">
      <NavBar/>
      <br />
      <br />
      <br />
      <br />
      <br />

      <form className="form-signin" onSubmit={handleSignUp}>
        <h2 className="form-signin-heading fw-bold">Por favor regístrese: </h2>
      
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="Nombre y Apellido"
          required
          autoFocus
        />

       
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

       
        <input
          type="text"
          id="telefono"
          className="form-control"
          placeholder=" Telefono ej: 1234-5678"
          value={phone}
          onChange={
            (e) => setPhone(e.target.value)
          }
          required
          autoFocus
        />

      
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
            type="submit">
            Sign in
          </button>
      
      </form>
    </div>
  );
};
