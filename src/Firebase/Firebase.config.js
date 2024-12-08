// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzEUkRf_pCTn5DbQKo98PunQ3wvd94Pfw",
    authDomain: "tour-management-e2b0d.firebaseapp.com",
    projectId: "tour-management-e2b0d",
    storageBucket: "tour-management-e2b0d.firebasestorage.app",
    messagingSenderId: "134609448472",
    appId: "1:134609448472:web:2a5d859d3547d203bcdd6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;