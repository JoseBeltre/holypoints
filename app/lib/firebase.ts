import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdwYEoJ9PWky4z00IPyK9wO_K-hPTGlLQ",
  authDomain: "holypoints-m2.firebaseapp.com",
  projectId: "holypoints-m2",
  storageBucket: "holypoints-m2.firebasestorage.app",
  messagingSenderId: "452948509066",
  appId: "1:452948509066:web:afba2ae15e900ce187c873",
  measurementId: "G-VKDPLKB1SH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)