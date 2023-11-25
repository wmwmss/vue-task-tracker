import firebase from 'firebase/app';
import 'firebase/database';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHlGoFoeLECelmlFf3VQbiGIWiY4rdMig",
    authDomain: "vue-task-tracker-abb5f.firebaseapp.com",
    projectId: "vue-task-tracker-abb5f",
    storageBucket: "vue-task-tracker-abb5f.appspot.com",
    messagingSenderId: "987042208653",
    appId: "1:987042208653:web:7dfdd9f403bb813aa37bc4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;