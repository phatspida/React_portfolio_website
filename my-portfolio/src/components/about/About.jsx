import React from 'react'
import './about.css'
import ME from '../../assets/a letter.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <a href=""></a>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              <a href=""></a>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <a href=""></a>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Odio unde suscipit ratione placeat libero, ipsam eaque aut 
            voluptatum perferendis dolore, iure pariatur praesentium nemo 
            reiciendis sed maxime accusantium fugit sequi.
          </p>

          <a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
