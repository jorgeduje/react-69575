import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM-D5cTlG4W3LmH76eSKTPu1YWfA2aiAM",
  authDomain: "backend-75915-profe.firebaseapp.com",
  projectId: "backend-75915-profe",
  storageBucket: "backend-75915-profe.firebasestorage.app",
  messagingSenderId: "260361649985",
  appId: "1:260361649985:web:e04bb3ab7f3544e3212bc0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
