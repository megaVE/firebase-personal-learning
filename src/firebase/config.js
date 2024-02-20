import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH8aAMNFMna4x56k1P2OpP1TYLwqU8_ms",
  authDomain: "fir-learning-835a5.firebaseapp.com",
  projectId: "fir-learning-835a5",
  storageBucket: "fir-learning-835a5.appspot.com",
  messagingSenderId: "387165360445",
  appId: "1:387165360445:web:4ca41aca659a9ad4db7554"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
