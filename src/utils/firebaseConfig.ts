// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD76DKEz3eOt_IBTlDu2iL_E3zHVb40v7s",
  authDomain: "pokedex-771fb.firebaseapp.com",
  projectId: "pokedex-771fb",
  storageBucket: "pokedex-771fb.appspot.com",
  messagingSenderId: "986344561833",
  appId: "1:986344561833:web:f7ac50bb2358cc166f1db8",
  measurementId: "G-3GL5ESRS00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");

