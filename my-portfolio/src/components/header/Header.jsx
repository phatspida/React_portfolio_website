import React from 'react'
import './header.css'
import CTA from './CTA'
import myimage from '../../assets/programmer.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Ahmed Momodu</h1>
          <h5 className="text_light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={myimage} alt="me" />
          </div>
          <a href="#contact" className="scroll_down">scroll down</a>
        </div>
      </header>
    </div>
  )
}

export default header
