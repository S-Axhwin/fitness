// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs5p7NJJu9hMhcPNmaQOvacCwyj3tPe8M",
  authDomain: "test-fd1de.firebaseapp.com",
  databaseURL: "https://test-fd1de-default-rtdb.firebaseio.com",
  projectId: "test-fd1de",
  storageBucket: "test-fd1de.appspot.com",
  messagingSenderId: "657143871013",
  appId: "1:657143871013:web:fef77cb3476bcb6f95b1cc",
  measurementId: "G-EFYZD2DCRG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const analytics = getAnalytics(app);