/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjq1alIKd2fwc8avO8MZe0izwMcXzLOeI",
  authDomain: "anonymous-583c1.firebaseapp.com",
  projectId: "anonymous-583c1",
  storageBucket: "anonymous-583c1.appspot.com",
  messagingSenderId: "622499244240",
  appId: "1:622499244240:web:bbac2a147919edd8dcd6d5",
  measurementId: "G-200R3GKNWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth}