import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDQBxwrYtXshJZEHNHlhUwc6lZ2nAnVyuY",
    authDomain: "comments-7f565.firebaseapp.com",
    projectId: "comments-7f565",
    storageBucket: "comments-7f565.appspot.com",
    messagingSenderId: "941648761415",
    appId: "1:941648761415:web:e2016d9d4837df491ad762",
    measurementId: "G-0YM8TLXJMC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database()
  export const auth = firebase.auth()