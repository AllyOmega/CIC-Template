import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'; // as an example of a main content component
// ... other imports

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Router>
  );
}


export default App;