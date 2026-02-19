import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Signin from './Signin'
import Forgotpw from './Forgotpw'
import Dashboard from './Dashboard'
import Profile from './Profile'

function MainContent() {

  return (
    <div className='main-content  common'>
      
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgotpw" element={<Forgotpw />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my profile" element={<Profile />} />
            </Routes>
        
    </div>
  )
}

export default MainContent
