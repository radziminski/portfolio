import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: 'AIzaSyA234fvTjNNT3Rv98vbuAYeum44e3gLLp4',
    authDomain: 'portfo-e37a2.firebaseapp.com',
    databaseURL: 'https://portfo-e37a2.firebaseio.com',
    projectId: 'portfo-e37a2',
    storageBucket: 'portfo-e37a2.appspot.com',
    messagingSenderId: '316200280334',
    appId: '1:316200280334:web:0d3b4d61f479430e20b75f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
