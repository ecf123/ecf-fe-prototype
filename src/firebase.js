import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqFVYVthpIozXOTZXcLrt-nSzxJPfaZWY",
  authDomain: "ecf-future-hub.firebaseapp.com",
  databaseURL: "https://ecf-future-hub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ecf-future-hub",
  storageBucket: "ecf-future-hub.appspot.com",
  messagingSenderId: "424392930965",
  appId: "1:424392930965:web:bc2c06888ee5b3b59e4d9c",
  measurementId: "G-NGWLGV9EKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const database = getFirestore(app);