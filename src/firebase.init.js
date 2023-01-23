// Import the functions you need from the SDKs you need
import { getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyBfBeHYQAFboDDp_qh6cfBVSIQGo4jolZs",

  authDomain: "take-your-smile-72b4e.firebaseapp.com",

  projectId: "take-your-smile-72b4e",

  storageBucket: "take-your-smile-72b4e.appspot.com",

  messagingSenderId: "998978617565",

  appId: "1:998978617565:web:a54e96dc189fa23bcb9b34",

  measurementId: "G-8YSQ58PF8N"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;