import logo from './cafe-central-logo.png'
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="main logo" />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
