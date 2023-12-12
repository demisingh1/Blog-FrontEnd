import React from "react";
import { Link } from "react-router-dom";


const DashBoardPostList = ({ title, description, imgurl, _id}) => {
  // console.log(post);
  
  return (
    <Link to = {`/${_id}`}  className="post-card">
      <div className="image-container">
        <img src={imgurl} alt="blog name" className="img" />
      </div>
      <div className="card-text-container">
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    </Link>
  );
};

export default DashBoardPostList;
