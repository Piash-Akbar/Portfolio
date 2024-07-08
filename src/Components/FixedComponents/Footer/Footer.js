import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook , faYoutube, faLinkedin, faInstagram, faResearchgate, faWhatsapp, faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="add-cont">
            <div className="address">
                <h4>Address</h4>
                <p className='address-p'>Department of Physics <br /> Shahjalal University of Science and Technology <br />Sylhet-3114 Bangladesh</p>
            </div>
            <div className="contacts">
                <h4>Contacts</h4>
                <p>Email <br /> Personal: <a href="#">sknafisakbar@gmail.com</a><br />Official: <a href="#">sknafis19@student.sust.edu</a></p>

            </div>
        </div>
        <div className="social-media-links">

            <a href="https://www.facebook.com/Just.SNAP.iT" target='_blank'>
                <FontAwesomeIcon className='fa' icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com/in/sk-nafis-akbar-038899155/" target='_blank'>
                <FontAwesomeIcon className='fa' icon={faLinkedin} />    
            </a>
            <a href="https://github.com/Piash-Akbar" target='_blank'>
                <FontAwesomeIcon className='fa' icon={faGithub} /> 
            </a>
            <a href="https://www.youtube.com/@AnirbanBhattacharjee" target='_blank'>
                <FontAwesomeIcon className='fa' icon={faYoutube} />    
            </a>
            <a href="https://www.instagram.com/pias_akbar/" target='_blank'>
                <FontAwesomeIcon className='fa' icon={faInstagram} />        
            </a>
            <a href="#" target='_blank'>
                <FontAwesomeIcon className='fa' icon={faResearchgate} />        
            </a>
            <a href="https://wa.link/a5twkv" target='_blank'>
                <FontAwesomeIcon className='fa' icon={faWhatsapp} />        
            </a>

        </div>
        <footer>Copyright © Sk Nafis Akbar | All Rights Reserved</footer>
    </div>
  )
}

export default Footer