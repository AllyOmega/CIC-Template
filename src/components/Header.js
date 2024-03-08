import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using React Router for navigation
import '../css/style.css'; // assuming style.css is in the same directory or adjust the path accordingly

import logo from '../img/logo.bmp';


function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Custom Italian Cabinets logo" />
        </Link>
        <div className="hamburger-menu">☰</div>
        <ul className="nav-links">
          <li><Link to="/about">ABOUT</Link></li>
          <li className="separators"> | </li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li className="separators"> | </li>
          <li><Link to="/gallery">GALLERY</Link></li>
        </ul>
      </div>
      <div className="header second" id="subheader">
        <ul>
          <li><Link to="#">Kitchens</Link></li>
          <li>|</li>
          <li><Link to="#">Custom Closets</Link></li>
          <li>|</li>
          <li><Link to="#">Home Office</Link></li>
          <li>|</li>
          <li><Link to="#">Wall Units</Link></li>
          <li>|</li>
          <li><Link to="#">Laundry Room</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
