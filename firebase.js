// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAULucnY3EA4mIzJW2MGcZrjAu1xUT5gfY",
  authDomain: "reachbox-8311b.firebaseapp.com",
  projectId: "reachbox-8311b",
  storageBucket: "reachbox-8311b.appspot.com",
  messagingSenderId: "464500730525",
  appId: "1:464500730525:web:3a25716fdf25a6382fc274",
  measurementId: "G-5CQM8VN0J7",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);