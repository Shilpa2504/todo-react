import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaTeK8laAD13vRS1aHtaBJGGboEMHNwts",
  authDomain: "todo-list-98c89.firebaseapp.com",
  databaseURL: "https://todo-list-98c89-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-98c89",
  storageBucket: "todo-list-98c89.appspot.com",
  messagingSenderId: "349322143096",
  appId: "1:349322143096:web:64ab075675d0a5b574d48d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();