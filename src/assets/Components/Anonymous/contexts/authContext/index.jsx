/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { auth } from "../../Firebase/firebase"
import React, { useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";

/* eslint-disable no-unused-vars */


export const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({ children }){
const [currentUser, setCurrentUser] = useState(null)
const [userLoggedIn, setuserLoggedIn] = useState(false)
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, initializeUser);

  return unsubscribe
}, [])


async function initializeUser(user) {
    if (user){
setCurrentUser({...user})
setuserLoggedIn(true)
    }else{
        setCurrentUser(null);
        setuserLoggedIn(false);
    }
    setIsLoading(false)
}

 const value = {
   
}
return (
<AuthContext.Provider  value={{value}} >
{!isLoading && children}
</AuthContext.Provider>


)


}



