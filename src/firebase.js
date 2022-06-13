// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwcbi1Cw6j0kJiobYfWTSIIyPkOW5aheY",
  authDomain: "blackscreen-85de5.firebaseapp.com",
  projectId: "blackscreen-85de5",
  storageBucket: "blackscreen-85de5.appspot.com",
  messagingSenderId: "802887592429",
  appId: "1:802887592429:web:13b5748002d2f130d01fe4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore
export const db = getFirestore(app);
