import React from 'react';
import "./Navbar.css";
import logo from "./Images/logo.png";



function Navbar() {
  return (
    <div className='container'>
      <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Fashion Hub"/>
      </div>
      <div className='nav-items'>
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>Logout</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
