import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return()=>{
            unSubscribe();
        }
    })

const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const SignInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}








    
const userInfo = {
    createUser,
    SignInUser,
    user,
}






    return (
        <>
          <AuthContext value={userInfo}>
            {children}
            </AuthContext>  
        </>
    );
};

export default AuthProvider;