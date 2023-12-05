import React from 'react'

const HomePostsList = ({...post}) => {
    const{title,description, user} = post
    // console.log(post);
  return (
    <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <h3>{user.name}</h3>
    </div>
  )
}

export default HomePostsList