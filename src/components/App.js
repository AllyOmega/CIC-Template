import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'; // Your Home component
import About from './About'; // Your About component
import ContactForm from './ContactForm';
import Gallery from './Gallery'
// Import other components

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoUrl = "https://cdn.shopify.com/videos/c/vp/4c78b5e60d244eb5a7cfa861b08f9c6e/4c78b5e60d244eb5a7cfa861b08f9c6e.HD-1080p-2.5Mbps-15305118.mp4";
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
 <>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen}/>

      <main>
        <Routes>
          <Route path="/" element={<Home menuOpen = {menuOpen} videoUrl = {videoUrl}/>} />
          <Route path="/About" element={<About menuOpen={menuOpen} videoUrl = {videoUrl}/>} />
          <Route path="/ContactForm"  element={<ContactForm menuOpen={menuOpen}/>} />
          <Route path="/Gallery" element= {<Gallery menuOpen={menuOpen}/>} />
          {/* Define other routes here */}
        </Routes>
      </main>
      <Footer />
</>
  );
}

export default App;
