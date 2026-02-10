import React from 'react'
import logo from '/logo.png'
import NavLinks from './NavLinks.jsx'

function Header() {
  return (
    <div className='header common'>
        <NavLinks />
        <img src={logo} alt="Logo" />
    </div>
  )
}

export default Header
