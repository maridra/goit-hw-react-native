import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGp8iIuc09f0djzHrBJ3Ktnwn46mQi4dc",
  authDomain: "goit-hw-react-native.firebaseapp.com",
  projectId: "goit-hw-react-native",
  storageBucket: "goit-hw-react-native.appspot.com",
  messagingSenderId: "560197630746",
  appId: "1:560197630746:web:c13cad55da36a13e914aa3",
  measurementId: "G-8YCZWQHS5B",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

// npm install -g firebase-tools
