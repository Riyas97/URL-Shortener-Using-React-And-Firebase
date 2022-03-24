/*
This file contains the firebase initialization and config code
*/

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC7bIPVzsh0FwpAYROY4nMkNXMF24dBUQ",
    authDomain: "url-shortener-react-72986.firebaseapp.com",
    projectId: "url-shortener-react-72986",
    storageBucket: "url-shortener-react-72986.appspot.com",
    messagingSenderId: "1026405137210",
    appId: "1:1026405137210:web:54dd3ffe83d24aec3c2e03",
    measurementId: "G-LQVXCLC1GV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);