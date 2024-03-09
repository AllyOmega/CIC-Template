import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // assuming you're using React Router for navigation
import '../css/style.css'; // assuming style.css is in the same directory or adjust the path accordingly

import logo from '../img/logo.bmp';


function Header({ toggleMenu, menuOpen }) {

  const [isNavVisible, setIsNavVisible] = useState(false);


  console.log("Header Menu Open:", toggleMenu);

  return (
    <>
      <div className="header">
        <div className='header-content'>
          <div className="hamburger-menu" onClick={toggleMenu}>☰</div>
          <div>
          <Link to="/"> <img className="logo" src={logo} alt="Custom Italian Cabinets logo" /> </Link>
          </div>
        </div>      
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/About">ABOUT</Link></li>
          <li className="separators"> | </li>
          <li><Link to="/ContactForm">CONTACT US</Link></li>
          <li className="separators"> | </li>
          <li><Link to="/gallery">GALLERY</Link></li>
        </ul>
      </div>
      {/* <div className="header second" id="subheader">
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
      </div> */}
    </>
  );
}

export default Header;
