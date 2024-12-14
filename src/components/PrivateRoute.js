import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = () => {

    const {user} = useSelector((state)=>state.auth)
  
        if(!user)
            return <Navigate to='/login' replace />
        return <Outlet/>
  
}