import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUTCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID ,
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const EcommerBD = getFirestore(app);