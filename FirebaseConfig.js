// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbvQqZPY8CFv-FIT6_V3oM874t-NOiAds",
  authDomain: "justgo-bd292.firebaseapp.com",
  databaseURL: "https://justgo-bd292-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "justgo-bd292",
  storageBucket: "justgo-bd292.appspot.com",
  messagingSenderId: "307325988974",
  appId: "1:307325988974:web:c1a97f032e3e4a6808f67f",
  measurementId: "G-WVM6ZC56XR"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);