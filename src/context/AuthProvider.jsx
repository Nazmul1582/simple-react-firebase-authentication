import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // logOut
    const logOut = () =>{
        return signOut(auth);
    }

    // set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser );
            setUser(currentUser);
        })
        return unsubscribe;
    }, [])

    const value = {
        user,
        googleLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;