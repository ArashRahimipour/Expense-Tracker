// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJIGGe6H46AcndDSP943VUlkxpSJ7KAqo",
  authDomain: "expense-tracker-3f340.firebaseapp.com",
  projectId: "expense-tracker-3f340",
  storageBucket: "expense-tracker-3f340.appspot.com",
  messagingSenderId: "426785245360",
  appId: "1:426785245360:web:3ad916bcfef00b92e51375",
  measurementId: "G-2CX5TCGGKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);