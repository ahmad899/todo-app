import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDE1Okk7LO_Qh9pZTQX1Fq6-9Vn_HBXPuA",
  authDomain: "todo-app-cp-7e982.firebaseapp.com",
  projectId: "todo-app-cp-7e982",
  storageBucket: "todo-app-cp-7e982.appspot.com",
  messagingSenderId: "1088187172693",
  appId: "1:1088187172693:web:ec4bf60a7d860840bc11dc",
  measurementId: "G-GB0WGJGHE6",
});

const db = firebaseApp.firestore();
export { db };
