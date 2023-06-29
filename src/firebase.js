import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc9z7qYzZPhIeGRxXjQXUHRLBS4YUz718",
  authDomain: "linkedin-clone-yt-9d36d.firebaseapp.com",
  projectId: "linkedin-clone-yt-9d36d",
  storageBucket: "linkedin-clone-yt-9d36d.appspot.com",
  messagingSenderId: "923631600432",
  appId: "1:923631600432:web:e84eefdb9fff43e7853ef5",
  measurementId: "G-Z28DWNLGT7",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };