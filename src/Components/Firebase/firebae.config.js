// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9jkbqSq-TGOmrv4ECROpkVkBlOLZ1_k",
  authDomain: "jobhunting-cd105.firebaseapp.com",
  projectId: "jobhunting-cd105",
  storageBucket: "jobhunting-cd105.appspot.com",
  messagingSenderId: "795172282773",
  appId: "1:795172282773:web:da09503b659bf8a58d169c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;