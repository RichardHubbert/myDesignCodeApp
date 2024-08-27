// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDewJJzT3gGRWHHC9-uQXbt8zZyusiNCU8",
  authDomain: "tubeguru001.firebaseapp.com",
  projectId: "tubeguru001",
  storageBucket: "tubeguru001.appspot.com",
  messagingSenderId: "843682556813",
  appId: "1:843682556813:web:b9df1f5e137f131f7eebc4",
  measurementId: "G-P2DEV5LRN6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);