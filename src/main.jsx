import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDK3saTozndwDFPwV66_3QCiQDxn6Ot8o",
  authDomain: "proyecto-react-mundoliterario.firebaseapp.com",
  projectId: "proyecto-react-mundoliterario",
  storageBucket: "proyecto-react-mundoliterario.appspot.com",
  messagingSenderId: "53328817384",
  appId: "1:53328817384:web:a864d01ff84a33853a6d5d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
