import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDn_3LbrkQh2691rMnUfNkuhp9g41X0h6g",
  authDomain: "linkedin-clone-5b4a3.firebaseapp.com",
  projectId: "linkedin-clone-5b4a3",
  storageBucket: "linkedin-clone-5b4a3.appspot.com",
  messagingSenderId: "563057250384",
  appId: "1:563057250384:web:faa75cf1f7e849ea1e8155",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
