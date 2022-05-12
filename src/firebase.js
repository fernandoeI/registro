import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMMLZxv-sBAPRtxW1leeOewYKT5tK28Wc",
  authDomain: "registro-6cead.firebaseapp.com",
  projectId: "registro-6cead",
  storageBucket: "registro-6cead.appspot.com",
  messagingSenderId: "462710578683",
  appId: "1:462710578683:web:6ab12be9758996dfca3f5e",
  measurementId: "G-M0KWVJ0PTR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
