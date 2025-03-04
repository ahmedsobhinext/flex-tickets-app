import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {  getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdT4wxNoUibajMBBa44S2BWMxIEu-6pUg",
  authDomain: "event-ticket-web.firebaseapp.com",
  projectId: "event-ticket-web",
  storageBucket: "event-ticket-web.firebasestorage.app",
  messagingSenderId: "693072295614",
  appId: "1:693072295614:web:b3d3c038aaf58086bc50ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);
export const auth=getAuth(app);