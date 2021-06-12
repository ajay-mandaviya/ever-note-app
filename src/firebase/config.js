import firebase from 'firebase/app'
import "firebase/firestore";
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyAtLIQs3aeHhSjUv8v8wAhM1ZkkPxaQLnw",
    authDomain: "ever-note-99666.firebaseapp.com",
    projectId: "ever-note-99666",
    storageBucket: "ever-note-99666.appspot.com",
    messagingSenderId: "396099693035",
    appId: "1:396099693035:web:58f59de7bab546673c91ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  export {projectAuth , projectFirestore};  

  export default firebase;

