import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import { deleteUser } from "firebase/auth/cordova";

export const AuthContext = createContext(null)




const AuthProvider = ( {children} ) => {
    const auth = getAuth(app);
    const [loading,isLoading] = useState(true);
    const [user,setUser] = useState(null);
    const [dbUser, setdbUser] = useState([]);

    const handleLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleSignUpByGoogle=()=>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider);
    }

    const handleLogOut=()=>{
        return signOut(auth);
    }

    console.log(auth.currentUser);
    const handleDelete=()=>{
        return deleteUser(auth.currentUser);
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
        handleDelete
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;