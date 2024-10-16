// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKPjS9djsaXfJXdql9roWyOcvdAQq9OI0",
  authDomain: "myprojportfolio.firebaseapp.com",
  projectId: "myprojportfolio",
  storageBucket: "myprojportfolio.appspot.com",
  messagingSenderId: "808593705254",
  appId: "1:808593705254:web:ff8c5dc0f91db1de6859e7"
};

export const app = initializeApp(firebaseConfig);
// Initialize Firebase


export const db = getFirestore()
