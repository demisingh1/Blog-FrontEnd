import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useUserContext } from '../Context/UserContext'
import { redirect, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from "../Actions";
import Cookies from "js-cookie";

const LoginPage = () => {
  const{handleSubmit, register} = useForm()
  const{dispatch}= useUserContext();
  const navigate = useNavigate();

  const onLogin = async (data)=>{
    const{email,password,confirmpassword} = data
    if(password !== confirmpassword){
      return alert('password not matched!@')
    }
    // console.log(data);
    const res = await axios.post('api/user/signin',{
      email,password
    })
    console.log(res);
       const user = res.data.ExistingUser
    dispatch({type:USER_LOGIN ,payload:{...user}})
    localStorage.setItem('user' , JSON.stringify(user))
    navigate('/dashboard');
            
  }
 
  return (
    <div className='Login-Container'>
      <form onSubmit={handleSubmit(onLogin)}>
        <label htmlFor="">Email:</label>
        <input type="text" placeholder='Enter Email' {...register('email',{required:true})} />
        <label htmlFor="">Password:</label>
        <input type="text" placeholder='password' {...register('password',{required:true})} />
        <label htmlFor="">ConfirmPassword:</label>
        <input type="text" placeholder='confirmpassword' {...register('confirmpassword',{required:true})} />
        <button className='btn'>Login In</button>
      </form>
    </div>
  )
}

export default LoginPage