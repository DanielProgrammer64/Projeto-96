// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt9rMWZSTT5hPxz7pY4R2mh8ZhDQAUloI",
  authDomain: "projeto93-6336b.firebaseapp.com",
  databaseURL: "https://projeto93-6336b-default-rtdb.firebaseio.com",
  projectId: "projeto93-6336b",
  storageBucket: "projeto93-6336b.appspot.com",
  messagingSenderId: "756881787247",
  appId: "1:756881787247:web:21c9baca60105629c6409a",
  measurementId: "G-D4ZDH8HRNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);