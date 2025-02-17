// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC9KYGflC1aPru2iEVGJ3bF-wGm-hEc94",
    authDomain: "next-proyecto-coder.firebaseapp.com",
    projectId: "next-proyecto-coder",
    storageBucket: "next-proyecto-coder.firebasestorage.app",
    messagingSenderId: "276317402547",
    appId: "1:276317402547:web:9a9f7bc0be0bc5085d07c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Exportando db para utilizar en otro archivos
export { db };