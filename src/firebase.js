// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhSnlYxipPO-_atX9hCjp4FmGLodVgnwU",
  authDomain: "events-development-542f0.firebaseapp.com",
  projectId: "events-development-542f0",
  storageBucket: "events-development-542f0.appspot.com",
  messagingSenderId: "870207311324",
  appId: "1:870207311324:web:3fc3bdfa3203603cba9319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;