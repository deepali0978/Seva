import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import Jump from 'react-reveal'
import '../App.css'
function Header() {
  return (
    
    <div className="nav">
      <Jump>
        <NavLink to='/'>Home</NavLink>
        </Jump>
        <Jump>
        <NavLink to='/AboutUs'>About Us</NavLink>
        </Jump>
        <Jump>
        <NavLink to='/ContactUs'>Contact Us</NavLink>
        </Jump>
    </div>
  )
}

export default Header