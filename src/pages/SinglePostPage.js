import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePostContext } from '../Context/PostContext';

const SinglePostPage = () => {
   const{fetchSinglePost, SinglePost} = usePostContext()
   const{id} = useParams();
   const {title,description,imgurl} = SinglePost
   useEffect(()=>{
    fetchSinglePost(id)
   },[id])
  return (
    <div className='single-post-container'>
        <div className='conainer-post'>
        <img src={imgurl} alt="photo-splash" />
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
    </div>
  )
}

export default SinglePostPage