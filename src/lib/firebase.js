// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, setPersistence, browserSessionPersistence } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3BX6G1k7sodltylxnSfcGmfBnwYC8RP0",
  authDomain: "main-nuance-409015.firebaseapp.com",
  projectId: "main-nuance-409015",
  storageBucket: "main-nuance-409015.appspot.com",
  messagingSenderId: "396755809533",
  appId: "1:396755809533:web:03eeddb9fc00bef154fa94",
  measurementId: "G-S9DB9DKHQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider();
provider.addScope('https://mail.google.com/');

const auth = getAuth();

export async function signIn() {
    const res = await signInWithPopup(auth, provider)
    return res.user
}
setPersistence(auth, browserSessionPersistence)