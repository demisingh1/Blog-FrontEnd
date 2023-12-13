import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/PostsReducer'
import { SHOW_ALL_POSTS, SINGLE_POST } from "../Actions";
import axios from "axios";
export const PostContext = createContext();
const initialState= {
    posts:[],
    userPosts:[],
    SinglePost:{},
}
export const PostContextProvider = ({children})=>{
   const[state, dispatch] = useReducer(reducer , initialState)

const GetAllPosts = async()=>{
    try {
        const posts = await axios.get('http://demiblogs.onrender.com/AllPosts')
    // console.log(posts.data.AllPosts);
    dispatch({type:SHOW_ALL_POSTS, payload:posts.data.AllPosts})
    } catch (error) {
        console.log(error);
    }
}

   useEffect(()=>{
    GetAllPosts()
   },[state.SinglePost])
   // single post fetch

   const fetchSinglePost = async (id)=>{
    const res = await axios.get(`http://demiblogs.onrender.com/posts/${id}`)
    // console.log(res.data.message);
    dispatch({type:SINGLE_POST , payload:res.data.message})
   }
                      
  return <PostContext.Provider value = {{...state , dispatch, fetchSinglePost}}>
    {children}
  </PostContext.Provider>
}

export const usePostContext = ()=>{
return useContext(PostContext);
}