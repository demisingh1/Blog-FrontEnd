import { SHOW_POSTS } from "../Actions"

const posts_reducer = (state, action) =>{
    if(SHOW_POSTS === action.type){
        return {...state, posts:action.payload}
    }

    return state
}

export default posts_reducer