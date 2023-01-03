// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHHmLGgPKabchX8uSfpYsLLeacgk82pBs",
  authDomain: "intforlan-28796.firebaseapp.com",
  projectId: "intforlan-28796",
  storageBucket: "intforlan-28796.appspot.com",
  messagingSenderId: "195729508886",
  appId: "1:195729508886:web:d7c35db4ecee002c588337",
  measurementId: "G-ZXWHBMJV28",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
