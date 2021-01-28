import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQkcbKJliPFXrOhmZhUnwXJiPPgCN4wHE",
  authDomain: "ecommerce-3b36a.firebaseapp.com",
  projectId: "ecommerce-3b36a",
  storageBucket: "ecommerce-3b36a.appspot.com",
  messagingSenderId: "457700816029",
  appId: "1:457700816029:web:7308050a810596f1ef5074",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
