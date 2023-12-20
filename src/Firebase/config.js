// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkKBK3xRNLLhfg8cC__XhGA53UHT2XtI0",
  authDomain: "quizquotient-25f6a.firebaseapp.com",
  projectId: "quizquotient-25f6a",
  storageBucket: "quizquotient-25f6a.appspot.com",
  messagingSenderId: "344930888314",
  appId: "1:344930888314:web:007e4ebabd2a0e26bbe9c3",
  measurementId: "G-WM6VY81T6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
