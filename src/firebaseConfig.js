import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBjWwYCphKN2rdhWCNZzxIQLmoQYbMoN8",
  authDomain: "backend-profe-4f083.firebaseapp.com",
  projectId: "backend-profe-4f083",
  storageBucket: "backend-profe-4f083.firebasestorage.app",
  messagingSenderId: "498993923626",
  appId: "1:498993923626:web:5ebc46fb277f0dc15a6553",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
