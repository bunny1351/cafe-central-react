import logo from './cafe-central-logo.png'
import menulogo from './menu.png'
import React, { useState } from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [show, setShow] = useState(0);
  return (
    <div>
      <nav>
        <img src={logo} alt="main logo" id="logo" />
        <img src={menulogo} alt="main logo" id="menu" onClick={() => setShow(!show)} />
        <ul>
          <NavLink exact activeClassName="active" to="/">
            <li>HOME</li>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <li>ABOUT</li>
          </NavLink>
          <NavLink activeClassName="active" to="/menu">
            <li>MENU</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>CONTACT</li>
          </NavLink>
        </ul>
      </nav>
      {show ?
        <div className="hnav">
          <ul>
            <NavLink exact activeClassName="active" to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>ABOUT</li>
            </NavLink>
            <NavLink activeClassName="active" to="/menu">
              <li>MENU</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </div>
        : null
      }
    </div>
  );
}

export default Navbar;
