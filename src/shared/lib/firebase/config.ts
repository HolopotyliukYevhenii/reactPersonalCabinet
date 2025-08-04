// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_kh6Cu5p2EaJ4oOff8cFW6cfubG9CHc",
  authDomain: "personalcabinet-e1bc6.firebaseapp.com",
  projectId: "personalcabinet-e1bc6",
  storageBucket: "personalcabinet-e1bc6.firebasestorage.app",
  messagingSenderId: "671686377158",
  appId: "1:671686377158:web:f572c2aaca56fe85b2a1c7"
};

// Initialize Firebase
const fireBase = initializeApp(firebaseConfig); 

// Export Firebase services
export const auth = getAuth(fireBase);
export const db = getFirestore(fireBase);