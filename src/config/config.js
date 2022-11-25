/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"
import { getFunctions } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyVtaz6K8IXvVA_AV5yrUwCJ4KV8a96W0",
    authDomain: "citybike-8b389.firebaseapp.com",
    projectId: "citybike-8b389",
    storageBucket: "citybike-8b389.appspot.com",
    messagingSenderId: "76396314989",
    appId: "1:76396314989:web:d60268a118b43ed3855a64",
    measurementId: "G-NSL94QBVGR"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app)
export const functions = getFunctions(app);
 */