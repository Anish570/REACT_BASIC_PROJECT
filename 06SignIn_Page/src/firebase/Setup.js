// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5QwLKEpjgGF-Mgou6v-l2BaKijZkfokY",
  authDomain: "newsapp-4156a.firebaseapp.com",
  projectId: "newsapp-4156a",
  storageBucket: "newsapp-4156a.appspot.com",
  messagingSenderId: "767145209387",
  appId: "1:767145209387:web:973925d2c96ace68bc846e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)