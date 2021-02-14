import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5dBBQmk1O0Lgw8i4z3rQHKFWJIe289X0",
  authDomain: "linkedin-clone-1cf56.firebaseapp.com",
  databaseURL: "https://linkedin-clone-1cf56-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-1cf56",
  storageBucket: "linkedin-clone-1cf56.appspot.com",
  messagingSenderId: "1063865137431",
  appId: "1:1063865137431:web:f5d23037a57dca8ad7df52",
  measurementId: "G-NEH7PPWBSP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
