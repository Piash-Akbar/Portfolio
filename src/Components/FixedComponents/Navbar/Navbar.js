import React from 'react'
import './Navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import Propic from '../../../Images/Pro.png' 


const Navbar = () => {
  return (
    <div className='nav' style={{position:'sticky'}}>
        <div className="profile-pic">
                <a href="/" target='_blank'>
                <img className='image-nav' src={Propic} alt="nai" />
            </a>
          <div className='myname'>Sk Nafis Akbar</div>
        </div>
        <ol className='lists'>
          <li className='list-item'><a href="/" className="about">Home</a></li>
          <li className='list-item'><a href="/Career" className="about">Experties</a></li>
          <li className='list-item'><a href="/Academic" className="about">Academic</a></li>
          <li className='list-item'><a href="/Personal" className="about">Personal</a></li>
          <li className='list-item'><a href="/Contact" className="about">Contact</a></li>


        </ol>
    </div>
  )
}

export default Navbar