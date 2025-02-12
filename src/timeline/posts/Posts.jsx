import React from 'react'
import './Posts.css';
import { Avatar } from '@mui/material';
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material';

function Posts({user,postimage,likes,timestamp}) {
  return (
    <>
        <div className='post'>
            <div className='post__header'>
                <div className='post__headerAuthor'>
                    <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                    {user} .<span>{timestamp}</span>
                </div>
                <MoreHoriz  />
            </div>
            <div className='post__img'>
              <img src={postimage} alt="" />
            </div>
            <div className='post__footer'>
              <div className='post__footericon'>
                <div className='post__iconMain'>
                  <FavoriteBorder className='post__icon' />
                  <ChatBubbleOutline className='post__icon' />
                  <Telegram className='post__icon' />
                  <BookmarkBorder className='post__iconsave post__icon' />
                  <div className='post__icon'>
                    Liked By {likes} people
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Posts