import {getFirestore} from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB14XMKQqT7VeUglB_ojVCN9uyTOkMBoc",
  authDomain: "ecommeratrapa2.firebaseapp.com",
  projectId: "ecommeratrapa2",
  storageBucket: "ecommeratrapa2.appspot.com",
  messagingSenderId: "589788820345",
  appId: "1:589788820345:web:de76bbeda0769265d5b5a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const EcommerBD = getFirestore(app);