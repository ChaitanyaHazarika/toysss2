import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, set} from "/node_modules/firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyCkDL6o5zIadycIqJoROr48mqUB3EkZab0",
    authDomain: "mikutoys-d47de.firebaseapp.com",
    databaseURL: "https://mikutoys-d47de-default-rtdb.firebaseio.com",
    projectId: "mikutoys-d47de",
    storageBucket: "mikutoys-d47de.appspot.com",
    messagingSenderId: "453934610008",
    appId: "1:453934610008:web:092e9ad475e2c675773c2d"
  };
  const app = initializeApp(firebaseConfig);  
  const db= getDatabase()

