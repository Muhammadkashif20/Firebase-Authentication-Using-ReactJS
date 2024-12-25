import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnMA3oGWjUlF_y1xCiJBUGa4iY4lrz2MI",
  authDomain: "fir-auth-reactjs-e62b0.firebaseapp.com",
  projectId: "fir-auth-reactjs-e62b0",
  storageBucket: "fir-auth-reactjs-e62b0.firebasestorage.app",
  messagingSenderId: "864577646611",
  appId: "1:864577646611:web:17513d8dd3f23ec15a0fe6",
  measurementId: "G-937M19NEJL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
