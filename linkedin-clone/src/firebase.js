import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjV3R6H30v8XFBEK__if1gIwyNkHb4EgI",
  authDomain: "linkedin-clone-2ed34.firebaseapp.com",
  projectId: "linkedin-clone-2ed34",
  storageBucket: "linkedin-clone-2ed34.appspot.com",
  messagingSenderId: "442688533034",
  appId: "1:442688533034:web:c7a024e260adfdf59c4953",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
