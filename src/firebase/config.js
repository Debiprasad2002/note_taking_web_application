// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANALlTQ9c8HVsCxrdR4C08T1pPA5zJZ3g",
  authDomain: "notetaking-55f3c.firebaseapp.com",
  projectId: "notetaking-55f3c",
  storageBucket: "notetaking-55f3c.appspot.com",
  messagingSenderId: "885811109830",
  appId: "1:885811109830:web:cdf193489a059802191cc7",
  measurementId: "G-SNTY79T0K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
