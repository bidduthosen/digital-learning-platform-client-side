import React from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
const auth = getAuth(app)
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    // signInWithPopup------
    const SignIinGoogle = (Provider) =>{
        return signInWithPopup(auth, Provider);
    }

    const value = {
        user, 
        SignIinGoogle
    };
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("state change", currentUser);
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;