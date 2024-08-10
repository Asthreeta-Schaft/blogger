// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-19214.firebaseapp.com",
  projectId: "mern-blog-19214",
  storageBucket: "mern-blog-19214.appspot.com",
  messagingSenderId: "109827964548",
  appId: "1:109827964548:web:8c15b46a86c47a474a8cd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

