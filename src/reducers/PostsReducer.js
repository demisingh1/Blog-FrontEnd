import { SHOW_ALL_POSTS, SINGLE_POST, USER_POSTS } from "../Actions"

const posts_reducer = (state, action) =>{
    if(SHOW_ALL_POSTS === action.type){
        return {...state, posts:action.payload}
    }
  if(USER_POSTS === action.type){
    return{...state , userPosts:action.payload}
  }
  if(SINGLE_POST === action.type){
    return{...state , SinglePost:action.payload}
  }
    return state
}

export default posts_reducer