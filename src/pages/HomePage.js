import React from 'react'
import { usePostContext } from '../Context/PostContext'
import HomePostsList from '../components/HomePostsList';

const HomePage = () => {
  const {posts} = usePostContext();
  // console.log(posts);
  return (
    <div>
      HomePage
      {posts.map((post)=>{
        return <HomePostsList key={post.id} {...post} />
      })}
    </div>
  )
}

export default HomePage