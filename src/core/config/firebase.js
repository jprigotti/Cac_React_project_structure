import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAL0B8Gy1auo2DqYVesDKWzNGpyet3MM1E",
    authDomain: "test-8af2c.firebaseapp.com",
    projectId: "test-8af2c",
    storageBucket: "test-8af2c.appspot.com",
    messagingSenderId: "218068126838",
    appId: "1:218068126838:web:fc88e84a2511bbd4c02357",
    measurementId: "G-Q7RH3YGSBD"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

