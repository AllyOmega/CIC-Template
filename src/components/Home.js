import React from 'react';
import Header from './Header'; // Adjust the import paths if necessary
import Footer from './Footer';
import { Link } from 'react-router-dom'; // assuming you're using React Router for navigation
// Import images - replace with correct relative paths
import splashImage from '../img/splash.bmp';
import blueWhiteKitchenImage from '../gallery/blue-white-kitchen.bmp';
import marbleKitchenImage from '../gallery/marble-kitchen.bmp';
import lioherImage from '../img/lioher.bmp';
import handshakeImage from '../img/handshake.bmp';
import designImage from '../img/design.bmp';
import ecofriendlyImage from '../img/ecofriendly.bmp';

function Home({ menuOpen }) {

  console.log("Menu Open:", menuOpen);
  
  return (
    <div className={`main-content ${menuOpen ? 'show-menu' : ''}`}>
      <div className="hero-text">
        <div className="hero-content">
          <div className="hero-main">
            Welcome to Custom Italian Cabinets
          </div>
          <div className="second">
            CIC Design & Manufacture uses the experience gained over 
            its 17 Years of working on Italian Mega Yachts in South Florida 
            towards making Affordable Modern Kitchen Cabinets, Vanities, and Closets.
          </div>
          <button>Sign up</button>
        </div>
    
        <div className="hero-image">
          <div className="carousel">                
            <img src={splashImage} alt="image of friendly consultant speaking with customer about Custom Italian Cabinet products" className="carousel-image active" />
            <img src={blueWhiteKitchenImage} alt="image of beautiful blue and white kitchen with custom cabinets" className="carousel-image" />
            <img src={marbleKitchenImage} alt="image of beautiful marble kitchen with custom cabinets" className="carousel-image" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-header">
          WHY CUSTOM ITALIAN CABINETS?
        </div>
        <div className="image-blocks">
          <div className="image-block">
            <img src={lioherImage} alt="image of the Lioher logo" />
            <p>Partnering with Lioher to bring only the finest materials and craftsmanship. </p>
          </div>
          <div className="image-block">
            <img src={handshakeImage} alt="image of a handshake shaped like a heart" />
            <p>Exceptional Service - From consultation to installation.</p>
          </div>
          <div className="image-block">
            <img src={designImage} alt="image of a minimalist representation of cabinet" />
            <p> Innovative Designs - Tailored to meet your unique taste. </p>
          </div>
          <div className="image-block">
            <img src={ecofriendlyImage} alt="image of a leaf, indicating eco-friendliness" />
            <p>Sustainability - Eco-friendly materials and practices.</p>
          </div>    
        </div>
      </div>
      <div className="quote-section">
        <div className="quote-box">
          <p className="quote">
            "Our kitchen is not 
            just a place to cook but a space where memories are made, 
            all thanks to Custom Italian Cabinets."
          </p> 
          <div className="attribution">
            - Brenda, from Weston, FL
          </div>
        </div>
      </div>
      <div className="action">
        <div className="action-content">
          <div>
            <p className="action-header"> Contact us for a <strong>Free Consultation</strong></p>
            <p className="action-text"> Come to our office for a <strong> Virtual Reality Presentation </strong> 
            and see what your space would look like after a remodel!</p>
          </div>
          <div>
            <button className="action-button">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
