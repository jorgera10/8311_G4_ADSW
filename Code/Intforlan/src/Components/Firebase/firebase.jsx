// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDHHmLGgPKabchX8uSfpYsLLeacgk82pBs",
  authDomain: "intforlan-28796.firebaseapp.com",
  projectId: "intforlan-28796",
  storageBucket: "intforlan-28796.appspot.com",
  messagingSenderId: "195729508886",
  appId: "1:195729508886:web:d7c35db4ecee002c588337",

  // apiKey: "AIzaSyAzVDl1mb4m7DR0QisdrgC18NARcgOJ9Hc",
  // authDomain: "intforlan1-daf47.firebaseapp.com",
  // projectId: "intforlan1-daf47",
  // storageBucket: "intforlan1-daf47.appspot.com",
  // messagingSenderId: "529907281895",
  // appId: "1:529907281895:web:775967392e0b6fe867d742",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ----------------------------------------------------------------------------------------------------------

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAzVDl1mb4m7DR0QisdrgC18NARcgOJ9Hc",
//   authDomain: "intforlan1-daf47.firebaseapp.com",
//   projectId: "intforlan1-daf47",
//   storageBucket: "intforlan1-daf47.appspot.com",
//   messagingSenderId: "529907281895",
//   appId: "1:529907281895:web:775967392e0b6fe867d742",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
