import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { jwtDecode } from "jwt-decode";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// role checking utility function
const CheckAdmin = ({ children }) => {
    // Get current user from context, retrieve JWT token from localStorage, get current route location,
    // decode the token to extract the user's role for admin check
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const location = useLocation()
    const decoded = jwtDecode(token)
    const { role } = decoded;

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace={true} />
    } else {
        if (role !== "admin") {
            toast.error("Unauthenticated access");
            return <Navigate to="/" />
        } else {
            return children
        }
    }


};

export default CheckAdmin;