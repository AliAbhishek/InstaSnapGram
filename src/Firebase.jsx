
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA86c6Ya4OeTFXvGEL96DFtq-Sl_jeh3cg",
  authDomain: "instasnapgram-fc93c.firebaseapp.com",
  databaseURL: "https://instasnapgram-fc93c-default-rtdb.firebaseio.com",
  projectId: "instasnapgram-fc93c",
  storageBucket: "instasnapgram-fc93c.appspot.com",
  messagingSenderId: "886710185040",
  appId: "1:886710185040:web:8dfe781331aadbf406b555",
  measurementId: "G-SMYB8T93YL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);