import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic3.png'
import IMG2 from '../../assets/pic4.png'
import IMG3 from '../../assets/pic5.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Task-Tracker Web Application (Props, Components, useState, useEffect, React-Icons, RESTful API) - React',
    github: 'https://github.com/phatspida/tast-tracker',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Commercial Ecommerce Website (User Authentication, FetchAPI, RESTful API gateway, Customised Backend and Payments Enabled) - Django',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Blog Web Application (Secured Authentication Enabled, Customised Backend, CRUD functionality) - Django',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key = {id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
