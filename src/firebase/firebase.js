import { initializeApp } from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";
import {
  getAuth
} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlU_b7q26_1KyBbwLossYYXc_o4T9DJ2s",
  authDomain: "netflix-clone-f78d1.firebaseapp.com",
  projectId: "netflix-clone-f78d1",
  storageBucket: "netflix-clone-f78d1.appspot.com",
  messagingSenderId: "269330537491",
  appId: "1:269330537491:web:9869008c949d1d1481f3e6",
};

  initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
