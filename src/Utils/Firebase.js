import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfhki6-AI5RUkYflDweL5BhcjfR3svZkA",
  authDomain: "whatscommerce-c8e47.firebaseapp.com",
  projectId: "whatscommerce-c8e47",
  storageBucket: "whatscommerce-c8e47.appspot.com",
  messagingSenderId: "803245765449",
  appId: "1:803245765449:web:8bcf85beefa4a895a5e098",
};
// Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);
