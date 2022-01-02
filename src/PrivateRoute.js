import React from 'react'
import { Navigate } from 'react-router'; 

const PrivateRoute = ({isAuth,children}) => {
    return (
        <div>
            {isAuth ? children: <Navigate to="/home"/>}
        </div>
    )
}

export default PrivateRoute;
