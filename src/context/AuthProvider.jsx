import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // login with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login with github
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // login with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUser = (currentUser, username) => {
    return updateProfile(currentUser, {
      displayName: username,
      photoURL: "https://i.ibb.co/DzyRT8V/author3.jpg",
    });
  };

  // login
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

    // reset or fogotten password
    const resetPassword = email => sendPasswordResetEmail(auth, email);

  // logOut
  const logOut = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    // clean up function
    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    googleLogin,
    githubLogin,
    createUser,
    updateUser,
    loginUser,
    resetPassword,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
