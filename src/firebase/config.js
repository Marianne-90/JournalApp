
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCU94y8_bg5HWdRD5_3jYFEkB97bld9OEc",
  authDomain: "react-cursos-ccf16.firebaseapp.com",
  projectId: "react-cursos-ccf16",
  storageBucket: "react-cursos-ccf16.appspot.com",
  messagingSenderId: "484032579627",
  appId: "1:484032579627:web:92ed469ce50f873cd9426e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
