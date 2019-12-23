import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBJk24cUcl976XhQSaVUZjfEVx7uxcXwos",
    authDomain: "crwn-db-1e8af.firebaseapp.com",
    databaseURL: "https://crwn-db-1e8af.firebaseio.com",
    projectId: "crwn-db-1e8af",
    storageBucket: "crwn-db-1e8af.appspot.com",
    messagingSenderId: "855537048212",
    appId: "1:855537048212:web:accb1762022196b2ec7281",
    measurementId: "G-GD7YKJ9057"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;