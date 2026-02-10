import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

function NavLinks() {

  function menuClick() {
    const navlinks = document.querySelector('.navlinks');
    navlinks.classList.toggle('active');
  }

  return (
    <div className='headermenu'>

      <div className="menu" onClick={() => menuClick()}>&#9776;</div>

      <div className='navlinks'>
        <ul>
            <li><a href="/signin">Signin</a></li>
            <li><a href="/signup">Signup</a></li>
        </ul>
      </div>

    </div>
  )
}

export default NavLinks
