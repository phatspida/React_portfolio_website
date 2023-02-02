import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiBookmark3Line} from 'react-icons/ri'
import {FaHandsHelping} from 'react-icons/fa'
import {MdOutlineWifiCalling3} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick = {() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about"  onClick ={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><RiBookmark3Line /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services'? 'active' : ''}><FaHandsHelping /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><MdOutlineWifiCalling3 /></a>

    </nav>
  )
}

export default Nav
