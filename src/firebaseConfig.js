import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX3KuW_MlwUSy2Jga9a1BqqgHCkpe7sjY",
  authDomain: "health-fitness-tracker-9bb46.firebaseapp.com",
  projectId: "health-fitness-tracker-9bb46",
  storageBucket: "health-fitness-tracker-9bb46.appspot.com",
  messagingSenderId: "806776918704",
  appId: "1:806776918704:web:7fdd0b23d352ecf76c6175",
  measurementId: "G-BB9KNDFGRV",
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { db, firebaseApp };
