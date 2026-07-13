import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIs9fgXZ6kutUG0vnbpUn9pCP_gVsO5Sc",
  authDomain: "lvee-11405.firebaseapp.com",
  projectId: "lvee-11405",
  storageBucket: "lvee-11405.firebasestorage.app",
  messagingSenderId: "779191564434",
  appId: "1:779191564434:web:f0d47e80388c70924b0e4b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();