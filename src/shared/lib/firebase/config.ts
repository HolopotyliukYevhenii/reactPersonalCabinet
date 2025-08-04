import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const fireBase = initializeApp(firebaseConfig); 

// Export Firebase services
export const auth = getAuth(fireBase);
export const db = getFirestore(fireBase);