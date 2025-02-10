import React from 'react'
import './Navbar.css'
import navlogo from 'C:/Users/HP/Desktop/E-Commerce/admin/src/assets/logo.png'
import navProfile from 'C:/Users/HP/Desktop/E-Commerce/admin/src/assets/profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} className='nav-profile' alt="" />
        
    </div>
  )
}

export default Navbar