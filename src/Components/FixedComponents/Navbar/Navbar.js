// import React, { useState } from 'react'
import './Navbar.css'
import Propic from '../../../Images/Pro.png' 
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';


const Navbar = () => {
  const navRef = useRef()

  const showNavBar=() =>{
    navRef.current.classList.toggle("responsive-nav")
  }

  
  return (
   
    <div className='nav' style={{position:'sticky'}}>


        {/* Nav Left  */}
        <div className="profile-pic">
                <a href="/" target='_blank'>
                <img className='image-nav' src={Propic} alt="nai" />
            </a>
          <div className='myname'>Sk Nafis Akbar</div>
        </div>

        {/* Nav Right  */}
        <nav className='nav-right' ref={navRef}>       
        <ul className='lists'>
          <li className='list-item'><a href="/" className="home"  >Home</a></li>
          <li className='list-item'><a href="/Career" className="about">Expertise</a></li>
          <li className='list-item'><a href="/Academic" className="about">Academic</a></li>
          <li className='list-item'><a href="/Personal" className="about">Personal</a></li>
          <li className='list-item'><a href="/Contact" className="about">Contact</a></li>
        </ul>


        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
          <FontAwesomeIcon className='fa' icon={faTimes} />
        </button>
        </nav>
        <button className='nav-btn' onClick={showNavBar}>
          <FontAwesomeIcon className='fa' icon={faBars} />
        </button>


    </div>
  )
}

export default Navbar