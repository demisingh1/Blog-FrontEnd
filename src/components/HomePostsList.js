import React from 'react'

const HomePostsList = ({...post}) => {
    const{title,description, user,imgurl} = post
    console.log(post);
  return (
    <div className='post-card'>
      <div className='image-container'>
      <img src={imgurl} alt="image name" className='img' />
      </div>
      <div className='card-text-container'>
      <h1>{title}</h1>        
        <h4>{description}</h4>
        <h3>{user.name}</h3>
      </div>
        
    </div>
  )
}

export default HomePostsList