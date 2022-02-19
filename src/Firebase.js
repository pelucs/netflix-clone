import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAoMYKD-WoyWZQs6rHDAAP5CUAk5E1hFGQ",
  authDomain: "netflix-clone-b731c.firebaseapp.com",
  projectId: "netflix-clone-b731c",
  storageBucket: "netflix-clone-b731c.appspot.com",
  messagingSenderId: "135958462222",
  appId: "1:135958462222:web:3ae2f9f83091ec2575e15f"
});

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };