import { useState,useEffect,createContext,useContext } from "react";
import { getAuth } from 'firebase/auth';
import { app } from "../backend/firebase";
import { getIdToken } from "firebase/auth";
import{ onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext();
export const Token=()=>{
    const auth = getAuth(app);
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
              setUser(user);
              const idToken = await user.getIdToken(); 
              setToken(idToken);
              console.log("ID Token:", idToken);
            } else {
              setUser(null);
              setToken(null);
            }
          });
      
          return () => unsubscribe();   
    }, []);

    const copyToken = async () => {
        try {
            await navigator.clipboard.writeText(token);
            alert('Token copiado exitosamente');
        } catch (err) {
            console.log(err);
        }
    };
    const handleToken = async (e) => {
       // e.preventDefault();
        try {
            const idToken = await getIdToken(user);
            setToken(idToken);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <button onClick={handleToken}>Get Token</button>
            <p>{token}</p>
            <button onClick={copyToken}>Copy Token</button>

        </div>
    );
}
export const useAuth = () => {
    return useContext(AuthContext);
};
