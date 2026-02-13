import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDidbES91I13xegSyU5jA5-3I5-MGUeues",
  authDomain: "mehedi-portfolio-aa35a.firebaseapp.com",
  projectId: "mehedi-portfolio-aa35a",
  storageBucket: "mehedi-portfolio-aa35a.firebasestorage.app",
  messagingSenderId: "434462645877",
  appId: "1:434462645877:web:9a889be7eb57332b14223c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);