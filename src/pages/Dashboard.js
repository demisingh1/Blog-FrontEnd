import React, { useEffect } from 'react'
import { useUserContext } from '../Context/UserContext'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import { USER_LOGIN, USER_POSTS } from '../Actions'
import { usePostContext } from '../Context/PostContext'
import DashBoardPostList from '../components/DashBoardPostList'

export const loader = async()=>{
    try {
        const data = await axios.get('/posts')
        // console.log(data)
        const SingleUser = await axios.get('/api/singleuser') // user detail fetched from database directly
        // console.log(SingleUser.data)
        return {data, SingleUser}
        // return data;  
    } catch (error) {
       return error
    }
    
}

const Dashboard = () => {
    const {data , SingleUser} = useLoaderData()
  const {user } = useUserContext() // get USER DETAILS
  const{dispatch , userPosts} = usePostContext();

   useEffect(()=>{
    //  dispatch({type:USER_LOGIN, payload:SingleUser.data.message}) // no need to fetch the user AGAIn ALREADY FETCHED FROM THE LOGIN PAGE AND SAVED To LOCAL STORAGE
     dispatch({type:USER_POSTS, payload:data.data.message})
   },[])
    

return <div className='post-card-container'>
    {userPosts.map((post)=>{
        return <DashBoardPostList key={post._id} {...post} />
    })}
</div>

}
export default Dashboard