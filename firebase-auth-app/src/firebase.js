// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyAS1jsD2VOGN3EoyCv09UzRrwihKxFCqls",
//   authDomain: "auth-59079.firebaseapp.com",
//   projectId: "auth-59079",
//   storageBucket: "auth-59079.firebasestorage.app",
//   messagingSenderId: "1085509990464",
//   appId: "1:1085509990464:web:f1f6eff3a65e066f6447a5",
//   measurementId: "G-3RP7S114BT"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// ✅ Initialize Firebase FIRST
const app = initializeApp(firebaseConfig);

// ✅ Export auth
export const auth = getAuth(app);

// ✅ Optional analytics (SAFE)
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  });
}