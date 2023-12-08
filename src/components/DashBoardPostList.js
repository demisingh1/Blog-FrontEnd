import React from "react";

const DashBoardPostList = ({ title, description, imgurl,}) => {
  // console.log(post)
  return (
    <div className="post-card">
      <div className="image-container">
        <img src={imgurl} alt="image name" className="img" />
      </div>
      <div className="card-text-container">
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default DashBoardPostList;
