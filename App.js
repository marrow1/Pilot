import React from 'react';
import AppNavigator from "./navigation/app.navigation";
import firebase from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrjir0RQCZALRmru7UGKmNlkYr9X_uan4",
  authDomain: "slate-87040.firebaseapp.com",
  projectId: "slate-87040",
  storageBucket: "slate-87040.appspot.com",
  messagingSenderId: "1082640595591",
  appId: "1:1082640595591:web:93de5464468868861a5622"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <AppNavigator /> ;
}

