// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b9cba.firebaseapp.com",
  projectId: "mern-estate-b9cba",
  storageBucket: "mern-estate-b9cba.firebasestorage.app",
  messagingSenderId: "761005891428",
  appId: "1:761005891428:web:dba979ff1dbc68aeeba471"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);