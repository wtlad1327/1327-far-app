import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7xrTPl88j4bAISyJQ7ETXr-HzMFSyVjE",
  authDomain: "far-app-d9c75.firebaseapp.com",
  projectId: "far-app-d9c75",
  storageBucket: "far-app-d9c75.firebasestorage.app",
  messagingSenderId: "752926661617",
  appId: "1:752926661617:web:936c9a6f71a5eae9fb8250",
  measurementId: "G-3RL9RDZL0D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
