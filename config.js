import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDYXDQSzbvf6uERz0dNu9ZM1pMv5r1GxzM",
  authDomain: "projeto-71-cd32d.firebaseapp.com",
  projectId: "projeto-71-cd32d",
  storageBucket: "projeto-71-cd32d.appspot.com",
  messagingSenderId: "35394425407",
  appId: "1:35394425407:web:42fcec21439cbfb9d45e8a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
