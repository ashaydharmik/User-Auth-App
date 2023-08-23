import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from "firebase/auth"
import {auth} from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const[user, setUser] = useState("");

function signUp(email, password){
    return createUserWithEmailAndPassword(auth,email,password)
}
function logIn(email, password){
    console.log("email",email)
    return signInWithEmailAndPassword(auth,email,password)
}
function logOut(){
    return signOut(auth);
}
function googleSignIn(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
}
function appleSignIn() {
    const appleIdToken = "<APPLE_ID_TOKEN>";
    const appleAccessToken = "<APPLE_ACCESS_TOKEN>";
    const credential = {
      idToken: appleIdToken,
      accessToken: appleAccessToken
    };

    return auth.signInWithCredential(credential);
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
setUser(currentUser);
});
return  () =>{
    unsubscribe();
}
},[])
    return (
        <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, appleSignIn,resetPassword}}>
             {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}