import React from 'react'
import './Suggestion.css';
import { Avatar } from '@mui/material';
function Suggestion() {
  
  return (
    <>
        <div className='suggestion'>
          <div className='suggestion_title'>Suggested For You</div>
          <div className='suggestions_usernames'>
            <div className='suggestion_username'>
              <div className='username_left'>
                <span className='avatar'>
                  <Avatar>A</Avatar>
                </span>
                <div className='user_info'>
                  <span className='username'>Aayushi</span>
                  <span className='relation'>New To Instagram</span>
                </div>
                <button className='follow_button'>Follow</button>
              </div>
                
              
            
              <div className='username_left'>
                <span className='avatar'>
                  <Avatar>A</Avatar>
                </span>
                <div className='user_info'>
                  <span className='username'>Alisha</span>
                  <span className='relation'>New To Instagram</span>
                </div>
                <button className='follow_button'>Follow</button>
              </div>
             
              
            
            </div>
          </div>
        </div>
    </>

  )
}

export default Suggestion