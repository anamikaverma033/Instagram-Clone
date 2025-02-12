import React from 'react'
import './SideNav.css';
import { HiMiniHome } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { BsPlusSquare } from "react-icons/bs";
function SideNav() {
  return (
    <>
      <div className='sidenav'>
        <div className='sidebar-Div'>
        <img src='./public/images/logo.avif' className='sidenav__logo' alt='' /> 
          <div className='sidebar'>
            <button className='sidenav__button'>
            <HiMiniHome style={{marginBottom:'10px'}} className='icons'/>
            </button>
            <button className='sidenav__button'>
            <RiSearchLine style={{marginBottom:'35px'}} className='icons'/>
            </button>
            <button className='sidenav__button'>
            <MdOutlineExplore style={{marginBottom:'10px'}} className='icons'/>
            </button>
            <button className='sidenav__button'>
            <BiMoviePlay style={{marginBottom:'10px'}} className='icons'/>
            </button>
            <button className='sidenav__button'>
            <RiMessengerLine style={{marginBottom:'10px'}} className='icons'/>
            </button>
            <button className='sidenav__button'>
            <FaRegHeart style={{marginBottom:'10px'}} className='icons'/>
            </button>
            <button className='sidenav__button'>
            <BsPlusSquare style={{marginBottom:'20px',width:'22px',marginLeft:'4px'}} className='icons'/>
            </button>
            </div>
          </div> 
      </div>
      
    
    </>
  )
}

export default SideNav