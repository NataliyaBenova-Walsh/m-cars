// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh6jBiwWkl-0z8iwzvE2RrdtW4Z68UA_M",
  authDomain: "m-cars-56c97.firebaseapp.com",
  databaseURL: "https://m-cars-56c97-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "m-cars-56c97",
  storageBucket: "m-cars-56c97.appspot.com",
  messagingSenderId: "233610843593",
  appId: "1:233610843593:web:c9cc5f4bea1edb3f734418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

