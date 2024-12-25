// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrvq8uiTwOD20PYvG_wfAyozyYGmsD7kA",
  authDomain: "react-apps-9ad5a.firebaseapp.com",
  projectId: "react-apps-9ad5a",
  storageBucket: "react-apps-9ad5a.firebasestorage.app",
  messagingSenderId: "181082124657",
  appId: "1:181082124657:web:e21a37a1ffa49ad5d086d0",
  measurementId: "G-WT28YRXKVE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);