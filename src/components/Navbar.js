import React from 'react'
import './Navbar.css'
import { useRef } from 'react'
import './About'
function Navbar() {
  
  return (
    <div>
    <div className='navbar'>
       <div  className='navbar-element'>Home</div>
       <div className='navbar-element'>Projects</div>
       <div className='navbar-element'>About</div>
       <div  className='navbar-element'>Contact</div>
    </div>
    </div>
  )
}

export default Navbar
