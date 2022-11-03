// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhapB3294uX6Us0OpoyC64bYdt0QmdD6E",
  authDomain: "tickr-fe23a.firebaseapp.com",
  projectId: "tickr-fe23a",
  storageBucket: "tickr-fe23a.appspot.com",
  messagingSenderId: "117752081032",
  appId: "1:117752081032:web:be7496ad2d8484732c8d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app);
