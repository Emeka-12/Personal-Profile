import React from 'react'
import './header.css'
import Avatar from '../../assets/myavatar.png'

const Header = () => {
  return (
    <header>
       <div className="container header_container">
          <div className='text'>
            <h5>Hello</h5>
            <h1>I'm Nnaemeka</h1>
            <h4>Fullstack Developer</h4>
            <a href="fehf" className='btn'>LET'S TALK</a>
          </div>

          <div className="avatar">
            <img src={Avatar} alt="avatar" />
          </div>
       </div>
       
    </header>
  )
}

export default Header
