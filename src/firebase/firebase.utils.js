import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1mEAOTa6-DKnl5UBSbX2hV8Et_TdXpFg",
        authDomain: "ecomercy-68497.firebaseapp.com",
        databaseURL: "https://ecomercy-68497.firebaseio.com",
        projectId: "ecomercy-68497",
        storageBucket: "ecomercy-68497.appspot.com",
        messagingSenderId: "825891629237",
        appId: "1:825891629237:web:487bb1e57cce9a6a1fb6fc"
};

firebase.initializeApp(config);

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
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;