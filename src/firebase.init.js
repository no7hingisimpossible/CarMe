// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs_dhv1eYUTdruqsOOTXJGHNo7kmTeYtI",
    authDomain: "carme-f8ab7.firebaseapp.com",
    projectId: "carme-f8ab7",
    storageBucket: "carme-f8ab7.appspot.com",
    messagingSenderId: "39586395863",
    appId: "1:39586395863:web:5fc0b3c3be06a607522292"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app; 

