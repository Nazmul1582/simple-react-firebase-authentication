import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser );
            setUser(currentUser);
        })
        return unsubscribe;
    }, [])

    const value = {
        user,
        googleLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;