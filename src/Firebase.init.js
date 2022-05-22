import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.RECT_APP_APIKEY,
    authDomain: process.env.RECT_APP_AUTHDOMAIN,
    projectId: process.env.RECT_APP_PROJECTID,
    storageBucket: process.env.RECT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.RECT_APP_MESSAGINGSENDERID,
    appId: process.env.RECT_APP_APPID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;