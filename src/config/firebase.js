//import firebase from '@react-native-firebase/app';
//import auth from '@react-native-firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBA3YcUzqecNWo2-n6oHXu2epn6fyE1JCY',
  authDomain: 'note-tracker-3e703.firebaseapp.com',
  projectId: 'note-tracker-3e703',
  storageBucket: 'note-tracker-3e703.appspot.com',
  messagingSenderId: '782838659833',
  appId: '1:782838659833:web:0ec73733fc876bb37d4028',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth, firebase};
