import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase'


firebase.initializeApp({
    apiKey: "AIzaSyDtI4q0rYZ4EHKTR73rwyzh2u9HkkTOPvg",
    authDomain: "first-try-fa2f9.firebaseapp.com",
    projectId: "first-try-fa2f9",
    storageBucket: "first-try-fa2f9.appspot.com",
    messagingSenderId: "44245745912",
    appId: "1:44245745912:web:ede401d51d605afab2bb0d",
    measurementId: "G-XPBHNHZ16F"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);