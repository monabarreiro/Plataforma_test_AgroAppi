
import firebase from '../../node_modules/firebase/app';
import '../../node_modules/firebase/auth';
import '../../node_modules/firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyB488jiLlvLFP0uNI4Si3Kqg0t_Guxws6w",
  authDomain: "plataformas-agroappi.firebaseapp.com",
  projectId: "plataformas-agroappi",
  storageBucket: "plataformas-agroappi.appspot.com",
  messagingSenderId: "137817998022",
  appId: "1:137817998022:web:98c7dc2702de98b65c0dc7",
  measurementId: "G-YHXSN6CGHG"
};
firebase.initializeApp(firebaseConfig);  //* conexion con Firebase *


 export const Register =()=>{
    return(
      <div className="container">
      <form className="form-signin">
        <h2 className="form-signin-heading">Por favor registrese </h2>
        <label htmlFor="inputEmail" className="sr-only">Direccion de email</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Recordame 
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
)
};