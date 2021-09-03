import logo from './cafe-central-logo.png'
import menulogo from './menu.png'
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="main logo" id="logo" />
      <img src={menulogo} alt="main logo" id="menu" />
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
