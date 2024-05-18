import firebase from 'firebase/compat/app'
import {initializeApp} from 'firebase/app'
import 'firebase/compat/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUNQQv_TbN5JX07mbdi3SJETQlBVCQI4o",
    authDomain: "thinkk-b71ef.firebaseapp.com",
    projectId: "thinkk-b71ef",
    storageBucket: "thinkk-b71ef.appspot.com",
    messagingSenderId: "481997799031",
    appId: "1:481997799031:web:5e54d7e26707cc43f51072",
    measurementId: "G-R24LGRBN1H"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;