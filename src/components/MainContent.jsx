import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Signin from './Signin'
import Forgotpw from './Forgotpw'

function MainContent() {

  return (
    <div className='main-content  common'>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgotpw" element={<Forgotpw />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MainContent
