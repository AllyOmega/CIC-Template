import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'; // Your Home component
import About from './About'; // Your About component
import ContactForm from './ContactForm';
// Import other components

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen}/>

      <main>
        <Routes>
          <Route path="/" element={<Home menuOpen = {menuOpen}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactForm"  element={<ContactForm />} />
          {/* Define other routes here */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
