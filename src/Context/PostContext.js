import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/PostsReducer'
import { SHOW_ALL_POSTS } from "../Actions";
import axios from "axios";
export const PostContext = createContext();
const initialState= {
    posts:[],
    userPosts:[],
}
export const PostContextProvider = ({children})=>{
   const[state, dispatch] = useReducer(reducer , initialState)

const GetAllPosts = async()=>{
    try {
        const posts = await axios.get('/AllPosts')
    // console.log(posts.data.AllPosts);
    dispatch({type:SHOW_ALL_POSTS, payload:posts.data.AllPosts})
    } catch (error) {
        console.log(error);
    }
}

   useEffect(()=>{
    GetAllPosts()
   },[])
                      
  return <PostContext.Provider value = {{...state}}>
    {children}
  </PostContext.Provider>
}

export const usePostContext = ()=>{
return useContext(PostContext);
}