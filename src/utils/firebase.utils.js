import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZSUd6ZuI4pJ3kGVKkFLoifmsiNg4CtrM",
    authDomain: "crwn-clothing-db-ba04d.firebaseapp.com",
    projectId: "crwn-clothing-db-ba04d",
    storageBucket: "crwn-clothing-db-ba04d.appspot.com",
    messagingSenderId: "1052561619757",
    appId: "1:1052561619757:web:a3ed8a95acefc2a49271a4"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
        prompt: "select_account"
    })


export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.log(error.message);
        }
    }

    return userDocRef
}