import React, { useContext, useEffect, useState } from 'react';
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
    return auth.logout();
}


export function AuthProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState();

    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, []);

    const value = {
        signup,
        login,
        logout,
        currentUser
    }

    return (
        <div>
        <AuthContext.Provider value={value}>
        {children}    
        </AuthContext.Provider>
        </div>
    )
}
