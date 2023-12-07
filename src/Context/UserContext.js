import React, { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/UserReducer'


const UserContext = createContext();
// const getUser =( )=>{
//     let oldUser = Cookies.get('user')
//     if(oldUser){
//      return JSON.parse(Cookies.get('user'))
//     }
//     else{
//         return []
//     }
// }
let user = localStorage.getItem('user');

const initialState = {
    user : user ? JSON.parse(localStorage.getItem('user')) : '' 
}

export const UserProvider = ({ children })=>{

  const [state , dispatch] =  useReducer(reducer , initialState);

   return <UserContext.Provider value= {{dispatch, ...state}}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = ()=>{
    return useContext(UserContext)
}