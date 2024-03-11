import React, {useState} from 'react';
import '../css/style.css'; // Import your stylesheet

const imagesContext = require.context('../gallery', false, /\.(bmp|jpg|jpeg)$/);

const images = imagesContext.keys().map((item) => ({
    src: imagesContext(item), // Use .default for ES modules
    alt: item.replace('./', '').replace(/\.(bmp|jpg|jpeg)$/, ''),
  }));
  
  function Gallery( {menuOpen}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 + images.length) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }


    return (
    <>

    <div className={`main-content ${menuOpen ? 'show-menu' : ''}`}>
    <div className="gallery-intro">
    <h2> Check out some of our products:</h2>
    </div>
        <div className="gallery">
          <div className="gallery-item">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          </div>
          <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
     </>
    );
  }

  export default Gallery;