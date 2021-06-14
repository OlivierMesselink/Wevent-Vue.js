import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDLXkcK2EJCxMt4UyDGqA08qdsqc6snP2k",
  authDomain: "vuejs-e4bad.firebaseapp.com",
  databaseURL:
    "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vuejs-e4bad",
  storageBucket: "vuejs-e4bad.appspot.com/users",
  messagingSenderId: "961798583583",
  appId: "1:961798583583:web:eb103b93074a54de54ac2a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectDb = firebase.database();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const getUser = () => {
  var user = projectAuth.currentUser;
  return { user };
};

export { projectDb, projectAuth, getUser, projectStorage };
