// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDuHGWMcABs61a2tT2S7r8X3VI178c0sUo',
  authDomain: 'crud-app-c3621.firebaseapp.com',
  projectId: 'crud-app-c3621',
  storageBucket: 'crud-app-c3621.appspot.com',
  messagingSenderId: '243974951182',
  appId: '1:243974951182:web:e7be2c3de2cc44b8a2075f',
  measurementId: 'G-7LJGSMFNCZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
export { db, analytics }
