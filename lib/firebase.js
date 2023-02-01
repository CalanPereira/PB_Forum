import { initializeApp, getApps } from 'firebase/app'
import 'firebase/auth';
import { GoogleAuthProvider,getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA0HdVWV7f8_uzgZ6VnNs1ZySxbGw9d43A",
  authDomain: "next-fire-443b9.firebaseapp.com",
  projectId: "next-fire-443b9",
  storageBucket: "next-fire-443b9.appspot.com",
  messagingSenderId: "81739948154",
  appId: "1:81739948154:web:88b807cc123b3c0257dbc3",
  measurementId: "G-6641TMGY84"
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider(app);

export const firestore = getFirestore(app);
export const storage = getStorage(app);