import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { jwtDecode } from "jwt-decode";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";


const CheckAdmin = ( {children} ) => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const location = useLocation()
    const decoded = jwtDecode(token)
    const {role} = decoded;

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace={true} />
    }else{
        if(role !== "admin"){
            toast.error("Unauthenticated access");
            return <Navigate to="/"/>
        }else{
            return children
        }
    }

    
};

export default CheckAdmin;