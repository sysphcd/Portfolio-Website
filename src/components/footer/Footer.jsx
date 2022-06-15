import React from 'react'
import './footer.css'
// import {FaFacebookF} from 'react-icons/fa'
// import {BsInstagram} from 'react-icons/bs'
// import {FaTwitter} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Phoebe Chen</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/pinhsuan-chend/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/sysphcd" target="_blank"><FaGithub /></a>
        {/* <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; Phoebe C. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer