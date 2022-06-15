import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {HiOutlineFolderOpen} from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>
            
            <article className='about__card'>
              <HiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>
          </div>

          <p>
          I have extensive experience as a web/software developer having worked in a variety of organisations across different countries. I have recently completed a data analysis course with Code Division where we undertook a project investigating fuel poverty on behalf of the charity Clutha Trust. Through my experience as a developer, I’ve become a great team player and excellent communicator who can discuss complex information with technical and non-technical people. I have experience of resolving complex and technical issues both independently and collaboratively.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        
        </div>
      </div>
    </section>
  )
}

export default About