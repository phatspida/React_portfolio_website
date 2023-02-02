import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic3.jpg'
import IMG2 from '../../assets/pic4.jpg'
import IMG3 from '../../assets/pic5.jpg'
import IMG4 from '../../assets/pic6.jpg'
import IMG5 from '../../assets/pic7.jpg'
import IMG6 from '../../assets/pic8.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My First Portfolio Work',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My First Portfolio Work',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'My First Portfolio Work',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'My First Portfolio Work',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'My First Portfolio Work',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6, 
    image: IMG6,
    title: 'My First Portfolio Work',
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
                <h3>This is a portfolio</h3>
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
