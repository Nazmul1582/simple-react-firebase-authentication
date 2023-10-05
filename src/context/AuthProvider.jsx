import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // login with github
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // logOut
    const logOut = () =>{
        return signOut(auth);
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser );
            setUser(currentUser);
            setLoading(false);
        })
        // clean up function
        return unsubscribe;
    }, [])

    const value = {
        user,
        loading,
        googleLogin,
        logOut,
        githubLogin
    }

    console.log(loading);

    return (
        <AuthContext.Provider value={value}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;