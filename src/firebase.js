// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC9tfiXjyx9cE-Xw0OJFrifBhrKJ9XyuN8",
  authDomain: "mhk-whatsapp-clone.firebaseapp.com",
  databaseURL: "https://mhk-whatsapp-clone.firebaseio.com",
  projectId: "mhk-whatsapp-clone",
  storageBucket: "mhk-whatsapp-clone.appspot.com",
  messagingSenderId: "222917588737",
  appId: "1:222917588737:web:9d3d74e9fa0e6534118d00",
  measurementId: "G-GGXN5N4JLW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
