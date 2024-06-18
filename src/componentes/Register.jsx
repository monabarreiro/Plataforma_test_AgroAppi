import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

import { initializeApp } from '../../node_modules/firebase/app';
import img12 from"../img/logoagroappi.png";


//import '../../node_modules/firebase/auth';
//import '../../node_modules/firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyBvS2VOUzWSQKroeyOBra2_f46VvhLpsvI",
  authDomain: "appiagro-362cb.firebaseapp.com",
  projectId: "appiagro-362cb",
  storageBucket: "appiagro-362cb.appspot.com",
  messagingSenderId: "135955527101",
  appId: "1:135955527101:web:6bd211dfbdfc8ac44cced4",
  measurementId: "G-XXE13SL4SG"
};

  const app = initializeApp(firebaseConfig);  //* conexion con Firebase *
 console.log(app);

 export const Logout =()=>{   // ver esta variable   //
  return ("../Register.jsx")
}
  

 export const Register =()=>{
    return(
     
      <div className="container">
        <NavBar/> 
        <img src={img12} alt="" width={"100px"} />
      <form className="form-signin">
        <h2 className="form-signin-heading">Por favor regístrese </h2>
        <label htmlFor="inputName" className="sr-only">Nombre</label>
        <input type="text" id="inputName" className="form-control" placeholder="Nombre" required autoFocus />

        <label htmlFor="inputName" className="sr-only">Apellido</label>
        <input type="text" id="inputName" className="form-control" placeholder="Apellido" required autoFocus />
       
        <label htmlFor="inputEmail" className="sr-only">Direccion de email</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="direccion email" required autoFocus />

      <label htmlFor='telefono' className= "sr-only">Telefono</label>
      <input type="number" id="telefono" className="form-control" placeholder="Telefono" required autoFocus />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Recordame 
          </label>
        </div>
       < Link to="/Login"> <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
       </Link>
      </form>
    </div>
    
)
};