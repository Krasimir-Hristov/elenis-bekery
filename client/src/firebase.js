// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'bulgarians-blog.firebaseapp.com',
  projectId: 'bulgarians-blog',
  storageBucket: 'bulgarians-blog.appspot.com',
  messagingSenderId: '403925688256',
  appId: '1:403925688256:web:026d17a31a28837df93225',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
