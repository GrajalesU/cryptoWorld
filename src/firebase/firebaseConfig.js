// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJyMNU2mAXR50gxf_zK2FnmYViMMaF4xU',
  authDomain: 'crypto-world-2c79d.firebaseapp.com',
  projectId: 'crypto-world-2c79d',
  storageBucket: 'crypto-world-2c79d.appspot.com',
  messagingSenderId: '9457585186',
  appId: '1:9457585186:web:3d68eb2647dc95a75a8e7b'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
