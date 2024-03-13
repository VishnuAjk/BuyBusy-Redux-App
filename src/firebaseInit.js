// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOO1zQMJPoFhkHUY-MqoiFab8B2iiz29s",
  authDomain: "buybusy-e7e29.firebaseapp.com",
  projectId: "buybusy-e7e29",
  storageBucket: "buybusy-e7e29.appspot.com",
  messagingSenderId: "191381668808",
  appId: "1:191381668808:web:c1a1ac52e0886dbfdcb6fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);