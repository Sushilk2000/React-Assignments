// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyKpkBuuFYT8i3bqy_OrWbzYtxsmWcHpU",
  authDomain: "gsproject1-ba58e.firebaseapp.com",
  projectId: "gsproject1-ba58e",
  storageBucket: "gsproject1-ba58e.appspot.com",
  messagingSenderId: "67924721558",
  appId: "1:67924721558:web:0fb15213c979cda2c127b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
