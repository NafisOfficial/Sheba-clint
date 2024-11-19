import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const PrivateRoute = ( {children} ) => {

    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace={true}/>
};

export default PrivateRoute;