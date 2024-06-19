import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../../Provider/AuthProvider/AuthProvider';

const ProivateRoute = ( {children} ) => {

    const {user} = useContext(AuthContex);
    const location = useLocation();

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace={true}/>
};

export default ProivateRoute;