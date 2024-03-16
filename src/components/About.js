import React from 'react';
import splashImage from '../gallery/splash.bmp'; // Adjust the path as needed

function About( {menuOpen, videoUrl}) {

  
    return (
        <div className={`main-content ${menuOpen ? 'show-menu' : ''}`}>

            <div className="video-overlay">
                <video className="about-video" autoPlay muted loop playsInline>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-text-overlay">
                    <h2>Custom Italian Cabinets</h2>
                    <p>FOR EVERY STYLE AND ANY BUDGET</p>
                    <a href="/pages/estimator" className="learn-more-button">LEARN MORE</a>
                </div>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        SunPro Marine, Inc. brings over 17 years of experience in the luxury marine sector, CIC has mastered 
                        the art of blending high-seas precision with the warmth and functionality of home interiors.
                        Our portfolio spans innovative modern kitchen cabinets, vanities, and closets, each
                        designed with an eye for timeless elegance and durability.
                    </p>
                    <p>
                        The collaboration with Lioher as our primary supplier for cabinet doors marks a significant
                        milestone in our journey. This partnership ensures that every piece not only meets but also
                        exceeds the highest standards of innovation, quality, and design. By integrating Lioher's
                        cutting-edge materials and finishes, CIC offers bespoke solutions that bring a touch of
                        luxury and sophistication to every home.
                    </p>
                    <p>
                        CIC's commitment to excellence encompasses design, manufacturing, and installation, offering a 
                        full-service approach to transforming living spaces. Our dedicated team works closely with each client
                        to bring their vision to life, ensuring every project reflects our core values of craftsmanship, quality, and luxury. 
                        As the residential arm of SunPro Marine, Inc., CIC is uniquely positioned to offer unparalleled expertise and service in the home interior market.
                    </p>
                </div>
            </div>

<div className="about-image-container middle">
                  <img className="about-img" src={splashImage} alt="About Custom Italian Cabinets" />
                  <div className="overlay-text">About Custom Italian Cabinets</div>
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

export default About;
