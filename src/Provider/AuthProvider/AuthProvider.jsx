import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)




const AuthProvider = ( {children} ) => {
    const auth = getAuth(app);
    const [loading,isLoading] = useState(true);
    const [user,setUser] = useState(null);
    const [dbUser,setdbUser] = useState([]);

    const handleLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleSignUpByGoogle=(provider)=>{
        return signInWithPopup(auth,provider)
    }

    const handleLogOut=()=>{
        return signOut(auth);
    }

    //get the user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser);
            isLoading(false);
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo = {
        auth,
        loading,
        isLoading,
        user,
        dbUser,
        setdbUser,
        setUser,
        handleLogin,
        handleSignUp,
        handleSignUpByGoogle,
        handleLogOut,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;