import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const Auth = firebaseApp.auth();
export const DB = firebaseApp.firestore();
