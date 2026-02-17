import React from 'react'
import logo from '/logo.png'
import NavLinks from './NavLinks.jsx'
import Cookies from 'js-cookie'

function Header() {
  return (
    <div className='header common'>
        <NavLinks />
        <img src={logo} alt="Logo" />
        {Cookies.get("user") && <span>Welcome, {JSON.parse(Cookies.get("user")).uname}! </span>}
    </div>
  )
}

export default Header
