import React, { useState } from 'react';
import '../css/style.css'; // Make sure this path is correct
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const imagesContext = require.context('../gallery', false, /\.(bmp|jpg|jpeg)$/);

const images = imagesContext.keys().map((item) => ({
  original: imagesContext(item),
  thumbnail: imagesContext(item)
}));

function Gallery({ menuOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const changeImage = (next) => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = next ? (prevIndex + 1) % images.length : (prevIndex - 1 + images.length) % images.length;
        return newIndex;
      });
      setTransition(false);
    }, 200); // Match this timeout to your CSS transition duration
  };

  return (
    <div className={`main-content ${menuOpen ? 'show-menu' : ''}`}>
      <div className="gallery-intro">
        <h3>Check out some of our products</h3>
        <p>
                        SunPro Marine, Inc. brings over 17 years of experience in the luxury marine sector, CIC has mastered 
                        the art of blending high-seas precision with the warmth and functionality of home interiors.
                        Our portfolio spans innovative modern kitchen cabinets, vanities, and closets, each
                        designed with an eye for timeless elegance and durability.
                    </p>
      </div>
      {/* <div className="gallery-container">
        <button className="gallery-button left" onClick={() => changeImage(false)}>&lt;</button>
        <div className={`gallery-item ${transition ? 'fade' : ''}`}>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        </div>
        <button className="gallery-button right" onClick={() => changeImage(true)}>&gt;</button>
      </div> */}
      <ImageGallery items={images} />
    </div>
  );
}

export default Gallery;