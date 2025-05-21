import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRout = ({children}) => {
    const {user} = use(AuthContext)

    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRout;