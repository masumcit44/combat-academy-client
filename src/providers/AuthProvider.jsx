import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const UpdateUserProfile = (name,photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser) {
        axios.post("http://localhost:5000/jwt", { email: currentUser?.email })
        .then(data=>{
          // console.log(data?.data?.token);
          localStorage.setItem("access-token",data?.data?.token)
          setLoading(false);
        })
      }
      else{
        localStorage.removeItem("access-token")
      }
      setLoading(false);
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    Login,
    GoogleSignIn,
    LogOut,
    UpdateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
