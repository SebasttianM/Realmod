// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB17EwYtDh7a1Ivj2Ed-89nzWILaPqzDWs",
    authDomain: "realmod-app.firebaseapp.com",
    projectId: "realmod-app",
    storageBucket: "realmod-app.appspot.com",
    messagingSenderId: "570461530433",
    appId: "1:570461530433:web:6c2fa6960135c3682519c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Google= new GoogleAuthProvider()
const Facebook= new FacebookAuthProvider()
const auth= getAuth()


export {app, Google, auth, Facebook}