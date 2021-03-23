import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
  apiKey: "AIzaSyDLJ3iAdClkR8msqyIil4ED99EXheO2AvI",
  authDomain: "brendan-english.firebaseapp.com",
  databaseURL: "https://brendan-english.firebaseio.com",
  projectId: "brendan-english",
  storageBucket: "brendan-english.appspot.com",
  messagingSenderId: "629757935861",
  appId: "1:629757935861:web:a6c8282e84f0aff941c5bc",
  measurementId: "G-ZQ6EL13GW0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();
const sendContactEmail = firebase.functions().httpsCallable('sendContactEmail');

export {
  db,
  auth,
  storage,
  sendContactEmail
};