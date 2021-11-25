import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyB_5QKD7QHpJVbm1Yoy0bMgDGcZxR3D30E",
  authDomain: "dogs-chat.firebaseapp.com",
  databaseURL: "https://dogs-chat-default-rtdb.firebaseio.com",
  projectId: "dogs-chat",
  storageBucket: "dogs-chat.appspot.com",
  messagingSenderId: "221928176509",
  appId: "1:221928176509:web:be98c4b01e4ed999852a14"
};

firebase.initializeApp(config);