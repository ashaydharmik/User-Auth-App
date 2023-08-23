// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0Zo7Q2sy_NwkvDFiGJfjbl7hddUFI_Q",
  authDomain: "react-auth-2b212.firebaseapp.com",
  projectId: "react-auth-2b212",
  storageBucket: "react-auth-2b212.appspot.com",
  messagingSenderId: "694450683748",
  appId: "1:694450683748:web:7b164d4aaab2b1e1cf0471",
  measurementId: "G-EVEMYRRC1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;