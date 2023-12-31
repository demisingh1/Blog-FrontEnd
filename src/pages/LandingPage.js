import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../App.css";
import { useUserContext } from "../Context/UserContext";
import axios from "axios";
import { USER_LOGOUT } from "../Actions";
const LandingPage = () => {
 const navigate = useNavigate();
  const { user,dispatch } = useUserContext();
  const logout =async()=>{
     await axios.get('http://localhost:8000/api/user/logout')
    dispatch({type:USER_LOGOUT,})
    localStorage.removeItem('user')
    navigate('/');
  }
  return (
    <>
      {user ? (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink className="btn" style={{padding:5, backgroundColor:'transparent', borderRadius:'none'}}
          onClick={logout}
          >LogOut</NavLink>
          <NavLink to='/addpost' >ADD POST</NavLink>
          <NavLink to='dashboard' >DashBoard</NavLink>
        </nav>
      ) : (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">register</NavLink>
        </nav>
      )}
      <Outlet />
    </>
  );
};

export default LandingPage;
