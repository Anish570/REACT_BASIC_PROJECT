// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC9CEaohX7CfDjpTN1Pfbb8XLuyZU4OdWg",
  authDomain: "vite-contact-manager-3e32c.firebaseapp.com",
  projectId: "vite-contact-manager-3e32c",
  storageBucket: "vite-contact-manager-3e32c.appspot.com",
  messagingSenderId: "119009445959",
  appId: "1:119009445959:web:c26a056abb667335fa8962"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);