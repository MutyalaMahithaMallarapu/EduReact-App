// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Regrj0PCZWSNKGwIswmeOw9fFcZR_vU",
  authDomain: "edureact-55360.firebaseapp.com",
  projectId: "edureact-55360",
  storageBucket: "edureact-55360.appspot.com",
  messagingSenderId: "890393399277",
  appId: "1:890393399277:web:e8f39397163a0d9f6ba1e4",
  measurementId: "G-B3LQJX70FT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
