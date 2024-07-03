
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//import '../../node_modules/firebase/auth';
//import '../../node_modules/firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB488jiLlvLFP0uNI4Si3Kqg0t_Guxws6w",
  authDomain: "plataformas-agroappi.firebaseapp.com",
  projectId: "plataformas-agroappi",
  storageBucket: "plataformas-agroappi.appspot.com",
  messagingSenderId: "137817998022",
  appId: "1:137817998022:web:98c7dc2702de98b65c0dc7",
  measurementId: "G-YHXSN6CGHG"
};


export const app = initializeApp(firebaseConfig);  //* conexion con Firebase *
 console.log(app);
export const db = getFirestore(app);


