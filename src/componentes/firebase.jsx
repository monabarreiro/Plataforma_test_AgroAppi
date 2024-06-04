
import { initializeApp } from '../../node_modules/firebase/app';

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

export const app = initializeApp(firebaseConfig);  //* conexion con Firebase *
 console.log(app);