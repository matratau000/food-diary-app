// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsU-FIMkTXq-_JLgvXJ5_NX9e_h7oJ5AM",
  authDomain: "food-diary-e1923.firebaseapp.com",
  projectId: "food-diary-e1923",
  storageBucket: "food-diary-e1923.appspot.com",
  messagingSenderId: "1080139379359",
  appId: "1:1080139379359:web:a0434c3635afa136cca8aa",
  measurementId: "G-GCVTWMWX99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);