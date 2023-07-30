// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDleymLipIpxLpSm6HF-fSoEkqYqov6Rfw",
  authDomain: "catfood-7a50b.firebaseapp.com",
  projectId: "catfood-7a50b",
  storageBucket: "catfood-7a50b.appspot.com",
  messagingSenderId: "745087895365",
  appId: "1:745087895365:web:ec3389898681dd788f202c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
