import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
const auth = getAuth(app)
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader , setLoader] = useState(true);


    // createPassword-----
    const createPassword =(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signInWithEmailAndPassword
    const signInPassword = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // signInWithPopup------
    const signIinGoogle = (Provider) =>{
        setLoader(true);
        return signInWithPopup(auth, Provider);
    };

    // signInFacebook---
    const signInFacebook = (Provider) =>{
        setLoader(true);
        return signInWithPopup(auth, Provider);
    }

    // logout
    const logOut = ()=>{
        setLoader(true);
        return signOut(auth);
    }


    // auth state change-----
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("state change", currentUser);
            setUser(currentUser);
            setLoader(false)
        })
        return ()=> unSubscribe();
    }, []);
    

    const value = {
        user,
        loader,
        signIinGoogle,
        signInFacebook,
        logOut,
        createPassword,
        signInPassword
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;