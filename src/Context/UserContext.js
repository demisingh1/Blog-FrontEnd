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
  
   // LOGIN USER
  //  const onLogin = async (data)=>{
  //   const{email,password,confirmpassword} = data
  //   if(password !== confirmpassword){
  //     return alert('password not matched!@')
  //   }
  //   console.log(data);
  //   const res = await axios.post('api/user/signin',{
  //     email,password
  //   })
  //   console.log(res);
  //      const user = res.data.ExistingUser
  //   dispatch({type:USER_LOGIN ,payload:{...user}})
  //   Cookies.set('user' , JSON.stringify(user));
    
  //   navigate('/dashboard');
            
  // }
  
 

   return <UserContext.Provider value= {{dispatch, ...state}}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = ()=>{
    return useContext(UserContext)
}