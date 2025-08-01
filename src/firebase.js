// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5qp5CZd-zjJ8ZKA2G_C3SVnJ5qeo6G9w",
  authDomain: "discount-799e1.firebaseapp.com",
  projectId: "discount-799e1",
  storageBucket: "discount-799e1.firebasestorage.app",
  messagingSenderId: "170585456211",
  appId: "1:170585456211:web:acf55390f47f36e0e1d0a6",
  measurementId: "G-527JYCY2SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query,where };