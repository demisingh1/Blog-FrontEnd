import {USER_LOGIN, USER_LOGOUT} from '../Actions'
const userReducer = (state,action)=>{
  if(USER_LOGIN === action.type){
    
    return { ...state, user:action.payload};
  }
  if(USER_LOGOUT === action.type){
    return {...state, user:''}
  }
   return state
}

export default userReducer