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


    // createPassword-----
    const createPassword =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signInWithEmailAndPassword
    const signInPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    // signInWithPopup------
    const SignIinGoogle = (Provider) =>{
        return signInWithPopup(auth, Provider);
    };

    // logout
    const logOut = ()=>{
        return signOut(auth);
    }


    // auth state change-----
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("state change", currentUser);
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    }, []);
    

    const value = {
        user, 
        SignIinGoogle,
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