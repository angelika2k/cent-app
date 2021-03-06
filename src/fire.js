import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKFHkPqfR84NmAY8WfGPLJQDolOrtKCGU",
  authDomain: "cent-app-uki.firebaseapp.com",
  databaseURL: "https://cent-app-uki-default-rtdb.firebaseio.com",
  projectId: "cent-app-uki",
  storageBucket: "cent-app-uki.appspot.com",
  messagingSenderId: "249641555080",
  appId: "1:249641555080:web:a2b994dfbb5d6245277b3d",
  measurementId: "G-H77HXTQCKS",
};

// var fire = firebase.initializeApp(config);

// export default fire;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default firebaseApp;
export { auth, provider, firebaseApp };
