// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa4n9Nw9wwXrXbM5F5yM0OiYkHNQLqwWU",
  authDomain: "treasurehunt-123.firebaseapp.com",
  projectId: "treasurehunt-123",
  storageBucket: "treasurehunt-123.firebasestorage.app",
  messagingSenderId: "545970002476",
  appId: "1:545970002476:web:879d5605ffff2364ebcf89",
  measurementId: "G-XLYJRM4ZG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
