/* eslint-disable no-unused-vars */
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword, } from "firebase/auth";

export const createUser = async (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password )
}

export const loginUser = async (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password )
}

export const doSignOut = () =>{
    return auth.signOut()
}

// export const doPasswordReset = (email) =>{
//     return sendPasswordResetEmail(auth, email)
// }


export const doPasswordChange = (password) =>{
    return updatePassword(auth, password)
}

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/Login`
    });
}


// Function to listen for changes in authentication state
export const getCurrentUser = (setUser) => {
    const auth = getAuth();
    return onAuthStateChanged(auth, (user) => {
      setUser(user); // Update the user state when authentication state changes
    });
  };
