import { Link } from "react-router-dom";

import { initializeApp } from "../../node_modules/firebase/app";

//import '../../node_modules/firebase/auth';
//import '../../node_modules/firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyBvS2VOUzWSQKroeyOBra2_f46VvhLpsvI",
  authDomain: "appiagro-362cb.firebaseapp.com",
  projectId: "appiagro-362cb",
  storageBucket: "appiagro-362cb.appspot.com",
  messagingSenderId: "135955527101",
  appId: "1:135955527101:web:6bd211dfbdfc8ac44cced4",
  measurementId: "G-XXE13SL4SG",
};

const app = initializeApp(firebaseConfig); //* conexion con Firebase *
console.log(app);

export const Register = () => {
  return (
    <div className="container col-6 mt-5 border border-5 p-4 shadow p-3 mb-5 bg-body rounded">
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
