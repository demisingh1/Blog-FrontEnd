import React from 'react'
import { useUserContext } from '../Context/UserContext'
import { Navigate,  } from 'react-router-dom';

const ProtectedRoute = ({Page}) => {
    
    const{user} = useUserContext();
    // console.log(user);
    if(user){
        return <Page />
    }
  return (
    <Navigate to='/login' />
  )
}

export default ProtectedRoute