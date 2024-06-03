import { createContext, useState } from "react";

export const AuthContex = createContext(null)




const AuthProvider = ( {children} ) => {
    const [loading,isLoading] = useState(false)
    const [user,setUser] = useState(false)

    const AuthInfo = {
        loading,
        isLoading,
        user,
        setUser
    }

    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;