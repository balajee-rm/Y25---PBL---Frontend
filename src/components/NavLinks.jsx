import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import menu from './List'

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
          {Cookies.get("user") && JSON.parse(Cookies.get("user")).menus.map((item, index) => (
            <li key={index}> <Link to={`/${item.name.toLowerCase()}`}> {item.name}</Link> </li>
          ))}
          <li> <Link to="/signin" onClick={() => Object.keys(Cookies.get()).forEach(cookieName => {Cookies.remove(cookieName);})}> Signout </Link> </li>
        </ul>
      </div>

    </div>
  )
}

export default NavLinks
