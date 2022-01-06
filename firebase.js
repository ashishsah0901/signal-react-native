import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM0u7Rtkusa_RKkhH1XCzQ0qAkdKdJE0I",
  authDomain: "netflix-clone-4e146.firebaseapp.com",
  projectId: "netflix-clone-4e146",
  storageBucket: "netflix-clone-4e146.appspot.com",
  messagingSenderId: "791969300645",
  appId: "1:791969300645:web:6694666c615edbb92c8d4c",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
