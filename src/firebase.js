import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxKbGVg3SXf-nlaUWdolNhHZoKDys0oxc",
  authDomain: "annotator-45d9c.firebaseapp.com",
  projectId: "annotator-45d9c",
  storageBucket: "annotator-45d9c.appspot.com",
  messagingSenderId: "110370534515",
  appId: "1:110370534515:web:6ad137858329ff2b496606",
  measurementId: "G-255NXT268F"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();