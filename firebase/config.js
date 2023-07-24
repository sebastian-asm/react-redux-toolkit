import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const { VITE_FIREBASE_APIKEY } = import.meta.env

const firebaseConfig = {
  apiKey: VITE_FIREBASE_APIKEY,
  authDomain: 'journal-app-c2ecf.firebaseapp.com',
  projectId: 'journal-app-c2ecf',
  storageBucket: 'journal-app-c2ecf.appspot.com',
  messagingSenderId: '752239443287',
  appId: '1:752239443287:web:da638b139b8b2309b7d212'
}

const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
