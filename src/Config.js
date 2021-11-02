import firebase from 'firebase/app';
import 'firebase/firestore';

 const firebaseConfig = {
     apiKey: "AIzaSyA-0oPltThbBs-UcC9l-ysdlYItXDj5p9U",
     authDomain: "cold-wave-69dd6.firebaseapp.com",
     databaseURL: "https://cold-wave-69dd6-default-rtdb.europe-west1.firebasedatabase.app",
     projectId: "cold-wave-69dd6",
     storageBucket: "cold-wave-69dd6.appspot.com",
     messagingSenderId: "845737517350",
     appId: "1:845737517350:web:9842c82e97af5c0a0b61e7",
     measurementId: "G-9Q8S25YCQH"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

