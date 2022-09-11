//Import authentication-related scripts:
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
//Import Firestore related scripts
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB96k2qLrrf_abxEswDS7iThUTCqwwdyi0',
  authDomain: 'e-commerce-db-d4a93.firebaseapp.com',
  projectId: 'e-commerce-db-d4a93',
  storageBucket: 'e-commerce-db-d4a93.appspot.com',
  messagingSenderId: '283479314729',
  appId: '1:283479314729:web:7551b80783b98acb87e738',
  measurementId: 'G-WZ1PCXP0S5',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Create a singletone to work with the Firestore:
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
