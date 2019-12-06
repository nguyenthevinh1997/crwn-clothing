import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase";

const config = {
  apiKey: "AIzaSyBX7tLWYLz4do2leigpf1lzmfdFeI0gU28",
  authDomain: "crwn-db-4184b.firebaseapp.com",
  databaseURL: "https://crwn-db-4184b.firebaseio.com",
  projectId: "crwn-db-4184b",
  storageBucket: "crwn-db-4184b.appspot.com",
  messagingSenderId: "223738044700",
  appId: "1:223738044700:web:f9de474162462ab09e9ad9",
  measurementId: "G-YJWYN3HP1N"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
