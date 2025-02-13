import React from 'react'
import './Homepage.css';
import SideNav from './navigation/SideNav';
import Timeline from './timeline/Timeline';
import StoryPanel from './Components/StoryPanel';


const Homepage = () => {
  
    return (
    <>
        <div className='homepage'>
            <div className='homepage__nav'>
                <SideNav  />
            </div>
            
            <div className='homepage__timeline'>
                <StoryPanel />
            
                <Timeline  />
            </div>

        </div>
    </>
  )
}

export default Homepage;