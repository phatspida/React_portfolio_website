import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkdln.com" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble /></a>
        <a href="https://wa.me/message/HUFPV32Y3QETF1.com" target="_blank"><BsWhatsapp /></a>
      
    </div>
  )
}

export default HeaderSocials
