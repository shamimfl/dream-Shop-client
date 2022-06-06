// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbGLeZExnWe9QAfDRDxwrtRrk2p0C-q30",
  authDomain: "dream-shop-dinjpur.firebaseapp.com",
  projectId: "dream-shop-dinjpur",
  storageBucket: "dream-shop-dinjpur.appspot.com",
  messagingSenderId: "616292004564",
  appId: "1:616292004564:web:19c6fb3e67a8afe45d8141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth ;