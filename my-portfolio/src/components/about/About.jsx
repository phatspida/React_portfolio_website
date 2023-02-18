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
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/*<a href=""></a>*/}
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              {/*<a href=""></a>*/}
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              {/*<a href=""></a>*/}
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            A dynamic Fullstack Engineer with sound technical expertise on use of Python, JavaScript, Node, React and Agile(Scrum) software development protocols having vast experience on the architecture and development of  web applications for corporate institutions and organizations. 
            Highly organized and business oriented self-starter  with an eye for user-centric designs adept in developing state-of-the-art technologies  while paying close attention to efficiency.
          </p>

          <a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
