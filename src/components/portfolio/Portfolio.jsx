import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'

//DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id : 1,
    image: IMG1,
    title : 'Plotly Express Project - Percentage of Glasgow population who are >= 25% income deprived and <= 80% energy efficiency (2020-2021)',
    github : 'https://github.com/Fuel-Poverty-Project-CD',
    demo : 'https://sysphcd.github.io/percetincomedeprived_avgenergyefficiency_plot.html'
  },
  {
    id : 2,
    image: IMG2,
    title : 'Power BI Project - Glasgow % income deprived & Median energy consumption',
    github : 'https://github.com/sysphcd/Fuel-Poverty-Project',
    demo : 'https://sysphcd.github.io/incomedeprived_medianenergy.html'
  },
  {
    id : 3,
    image: IMG3,
    title : 'Plotly Dash Project - Cesarean delivery rate in USA with',
    github : 'https://github.com/sysphcd/Python-with-PlotlyDash',
    demo : 'https://python-with-dashplotly.herokuapp.com'
  },
  {
    id : 4,
    image: IMG4,
    title : 'R Shiny Project - 1973 USArrests Dashboard for beginners',
    github : 'https://github.com/sysphcd/R_Shiny_Apps',
    demo : ' https://sysph.shinyapps.io/USArrestDashboard/'
  },
  {
    id : 5,
    image: IMG5,
    title : 'Power BI Project - UK Population On Benefit 2017',
    github : 'https://github.com/sysphcd/PowerBI_projects',
    demo : 'https://sysphcd.github.io/ukpopulationOnBenefit2017.html'
  },
  {
    id : 6,
    image: IMG6,
    title : 'Power BI Project - Covid 19 Cases',
    github : 'https://github.com/sysphcd/PowerBI_projects',
    demo : 'https://sysphcd.github.io/covid19cases.html'
  },
  {
    id : 7,
    image: IMG7,
    title : 'React Project - Portfolio Website',
    github : 'https://github.com/sysphcd/Portfolio-Website',
    demo : 'https://portfolio-phcd.herokuapp.com/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image,title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href= {github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
              
              </article> 
            )
          })
        }
        
      </div>
    </section>
  )
}




export default Portfolio