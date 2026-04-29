// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS1jsD2VOGN3EoyCv09UzRrwihKxFCqls",
  authDomain: "auth-59079.firebaseapp.com",
  projectId: "auth-59079",
  storageBucket: "auth-59079.firebasestorage.app",
  messagingSenderId: "1085509990464",
  appId: "1:1085509990464:web:f1f6eff3a65e066f6447a5",
  measurementId: "G-3RP7S114BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);