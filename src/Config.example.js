import firebase from 'firebase/app';
import 'firebase/firestore';

 const firebaseConfig = {
     apiKey: "xxxx-xxxx-xxxx-xxxx",
     authDomain: "xxxx-xxxx-xxxx-xxxx.firebaseapp.com",
     databaseURL: "https://xxxx-xxxx-xxxx-xxxx-default-rtdb.yyyyyy.firebasedatabase.app",
     projectId: "xxxx-xxxx-xxxx-xxxx",
     storageBucket: "xxxx-xxxx-xxxx-xxxx.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:xxxxxx:web:xxxxxxxxx",
     measurementId: "G-xxxxxxxxxxxxx"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

