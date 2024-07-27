// import React, { useState } from 'react'
import './Navbar.css'
import Propic from '../../../Images/Pro.png' 


const Navbar = () => {
  // const[currentPage,setCurrentPage] = useState('Home')
  return (
    <div className='nav' style={{position:'sticky'}}>
        <div className="profile-pic">
                <a href="/" target='_blank'>
                <img className='image-nav' src={Propic} alt="nai" />
            </a>
          <div className='myname'>Sk Nafis Akbar</div>
        </div>
        <ol className='lists'>
          <li className='list-item'><a href="/" className="home"  >Home</a></li>
          <li className='list-item'><a href="/Career" className="about">Experties</a></li>
          <li className='list-item'><a href="/Academic" className="about">Academic</a></li>
          <li className='list-item'><a href="/Personal" className="about">Personal</a></li>
          <li className='list-item'><a href="/Contact" className="about">Contact</a></li>


        </ol>
    </div>
  )
}

export default Navbar