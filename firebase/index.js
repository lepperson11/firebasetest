// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAXQCg7LlW0ib1yEa2i_XkNYCsAdUJ4nU",
  authDomain: "ttechfirebase.firebaseapp.com",
  projectId: "ttechfirebase",
  storageBucket: "ttechfirebase.appspot.com",
  messagingSenderId: "223821573344",
  appId: "1:223821573344:web:06139280fb907918a83485",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
