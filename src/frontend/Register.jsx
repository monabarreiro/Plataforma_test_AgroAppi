import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

import img12 from "../img/logoagroappi.png";


//import '../../node_modules/firebase/auth';
//import '../../node_modules/firebase/database';


 export const Logout =()=>{   // ver esta variable   //
  return ("../Register.jsx")
}
  

 export const Register =()=>{
    return(
     
      <div className="container">
        <NavBar/> 
        <img src={img12} alt="" width={"100px"} />
      <form className="form-signin">
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

        <label htmlFor="inputName" className="sr-only fw-bold m-1">
          Apellido
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="Apellido"
          required
          autoFocus
        />

        <label htmlFor="inputEmail" className="sr-only fw-bold m-1">
          Direccion de email
        </label>
        <input
          type="email"
          id="inputEmail"
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
          id="inputPassword"
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
        <Link to="/Login">
          {" "}
          <button
            className="btn btn-lg btn-primary btn-block mt-3"
            type="submit"
          >
            Sign in
          </button>
        </Link>
      </form>
    </div>
  );
};
