import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyDHHmLGgPKabchX8uSfpYsLLeacgk82pBs",
  // authDomain: "intforlan-28796.firebaseapp.com",
  // projectId: "intforlan-28796",
  // storageBucket: "intforlan-28796.appspot.com",
  // messagingSenderId: "195729508886",
  // appId: "1:195729508886:web:d7c35db4ecee002c588337",

  // apiKey: "AIzaSyAzVDl1mb4m7DR0QisdrgC18NARcgOJ9Hc",
  // authDomain: "intforlan1-daf47.firebaseapp.com",
  // projectId: "intforlan1-daf47",
  // storageBucket: "intforlan1-daf47.appspot.com",
  // messagingSenderId: "529907281895",
  // appId: "1:529907281895:web:775967392e0b6fe867d742",

  apiKey: "AIzaSyBUVWBIZRuhR6o2B2Zj-ktpoVo0YoXSzuE",
  authDomain: "intforlan2.firebaseapp.com",
  projectId: "intforlan2",
  storageBucket: "intforlan2.appspot.com",
  messagingSenderId: "835934432923",
  appId: "1:835934432923:web:23db5c58a9583b4cc4603e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
