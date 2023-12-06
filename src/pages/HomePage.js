import React from 'react'
import { usePostContext } from '../Context/PostContext'
import HomePostsList from '../components/HomePostsList';

const HomePage = () => {
  const {posts} = usePostContext();
  // console.log(posts);
  return (
    <div className='home-container'>
    <div className='post-card-container'>
      
      {posts.map((post)=>{
        return <HomePostsList key={post._id} {...post} />
      })}
    </div>
    </div>
  )
}

export default HomePage