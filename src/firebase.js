// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instanext-c869f.firebaseapp.com",
  projectId: "instanext-c869f",
  storageBucket: "instanext-c869f.appspot.com",
  messagingSenderId: "734136979120",
  appId: "1:734136979120:web:8703986d9d87b043037575"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


//FIREBASE STORAGE AYARLARI

/*

rules_version = '2';

// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if 
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*')
    }
  }
}


*/