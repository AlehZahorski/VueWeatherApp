import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCZNlvkGx11gKQ6dIfnGMCLkaZkpw5H2pM",
  authDomain: "weatherappmine.firebaseapp.com",
  projectId: "weatherappmine",
  storageBucket: "weatherappmine.appspot.com",
  messagingSenderId: "1028526732111",
  appId: "1:1028526732111:web:a65a81625213324ff40b3a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
