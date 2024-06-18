
import "./navBar.css";
import { Link } from "react-router-dom"

export const NavBar=( )=>{
    return (<div>

<ul>
  <li> <Link to=""> <a className="active" href="#home">Logout</a></Link>
  </li> 
  <li> <Link to="/login" >  <a href="#register">Login</a></Link>  </li>
  <li> <Link to="/register" >  <a href="#login">Register</a></Link>  </li>
  <li> <Link to="/" > <a href="#principal">Principal</a> </Link> </li>
</ul>

      

 
    </div>)
    }