import React, { useState } from 'react'
import './TimeLine.css'
import Suggestion from './Suggestion';
import Posts from './posts/Posts';
function TimeLine() {
   const [posts,setPosts] = useState([
    {
      user:"anamika",
      postimage:"./images/1.avif",
      likes:21,
      timestamp:'2d',
    },
    {
      user:"Monika",
      postimage:"./images/2.avif",
      likes:20,
      timestamp:'2h',
    },
    {
      user:"amita",
      postimage:"./images/3.avif",
      likes:19,
      timestamp:'3d',
    },
    {
      user:"sonia",
      postimage:"./images/5.avif",
      likes:18,
      timestamp:'12h',
    },
   ]);
  return (
    <>
        <div className='timeline'>
          <div className='timeline__left'>
            <div className='timeline__posts'>
              {
                posts.map(post=>(
                  <Posts user={post.user} postimage={post.postimage} likes={post.likes} timestamp={post.timestamp} />
                ))
              }
              
            </div>
          </div>
          <div className='timeline__right'>
            <Suggestion  />
          </div>
        </div>
  
    </>
    )
}

export default TimeLine;