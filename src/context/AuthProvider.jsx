import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    return (
        <AuthContext.Provider value={googleLogin}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;