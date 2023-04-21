import firebase from "firebase/compat/app"
import "firebase/compat/database"
import "firebase/compat/storage"
const firebaseConfig = {
  apiKey: "AIzaSyC4m2-dFU_-uoAsnuMm6_SEGLFZxbRYj-k",
  authDomain: "practice-ee2a3.firebaseapp.com",
  projectId: "practice-ee2a3",
  storageBucket: "practice-ee2a3.appspot.com",
  messagingSenderId: "934618080247",
  appId: "1:934618080247:web:bdd4601640f4f8aafd44f2",
  measurementId: "G-90C5W1B600"
};

firebase.initializeApp(firebaseConfig)

export const dbReference = firebase.database()
export const storage = firebase.storage()
export default firebase

