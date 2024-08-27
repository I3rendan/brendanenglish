import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

const config = {
  apiKey: "AIzaSyDLJ3iAdClkR8msqyIil4ED99EXheO2AvI",
  authDomain: "brendan-english.firebaseapp.com",
  projectId: "brendan-english",
  storageBucket: "brendan-english.appspot.com",
  messagingSenderId: "629757935861",
  appId: "1:629757935861:web:a6c8282e84f0aff941c5bc",
  measurementId: "G-ZQ6EL13GW0",
};

const appEnv = process.env.REACT_APP_ENV;

export const app = initializeApp(config);
export const adminApp = initializeApp(config, "secondary");
export const auth = getAuth(app);
export const functions = getFunctions(app);
export const sendContactEmail = httpsCallable(functions, "sendContactEmail");
