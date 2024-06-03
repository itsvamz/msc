// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzZ-qMYbu6aDOTZupbQ84zjOAEnVhg5Kg",
  authDomain: "present-maam.firebaseapp.com",
  projectId: "present-maam",
  storageBucket: "present-maam.appspot.com",
  messagingSenderId: "279404652911",
  appId: "1:279404652911:web:e319be28cef236a890a09a",
  measurementId: "G-D65WMYLYL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);