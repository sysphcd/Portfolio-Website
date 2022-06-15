import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I can offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Retrieve data from various resource</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Interrogate data struture and quality</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Clean and wrangle data</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Process and analyse data</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Phasellus in est ullamcorper, maximus arcu sit amet</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Produce data visualisation with Python, Power BI</p>
            </li>
          </ul>
        </article>
        {/* END OF DATA ANALYSIS*/}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Assist with hosting, domain settings</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Build website</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Make logo</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>SEO</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>System maintain & backup</p>
            </li>
            
            
          </ul>
        </article>
        {/* END OF WEB DEVELPMENT*/}
        <article className='service'>
          <div className="service__head">
            <h3>Application Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>In Progress</p>
            </li>
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services