import  { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../backend/firebase";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";


export const RecuperoContraseña = () => {

    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleRecupero = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Se ha enviado un correo para recuperar la contraseña");
            navigate("/");
        } catch (err) {
            setError(err.message);
            alert(error);
        }
    };
    return (
        <div >
            <NavBar />
            
            <br />
            <br />
            <br />
            <br />
        
            <h2 className="form-signin-heading"> Recuperar contraseña </h2>
            <form className="form-signin" onSubmit={handleRecupero}>
             
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="inputName" className="form-control" placeholder="email" required autoFocus />
                <button className="btn btn-lg btn-primary btn-block m-2" type="submit">
                    Enviar correo
                </button>
            </form>
        </div>
    );
}