// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy6MqxuCDENoH_S6olWGeG9zYWBXKbJmE",
  authDomain: "netflix-gpt-2ce80.firebaseapp.com",
  projectId: "netflix-gpt-2ce80",
  storageBucket: "netflix-gpt-2ce80.appspot.com",
  messagingSenderId: "1008188956864",
  appId: "1:1008188956864:web:b798e0ce75130fef1b8d25",
  measurementId: "G-Y402WE73YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();