// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBDSwUQIv-wPrxnwX5N2rqR4a9MiN8VGuM",
    authDomain: "photo-gallery-94530.firebaseapp.com",
    projectId: "photo-gallery-94530",
    storageBucket: "photo-gallery-94530.appspot.com",
    messagingSenderId: "59693270307",
    appId: "1:59693270307:web:4786784256ffaa10f6b896"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };