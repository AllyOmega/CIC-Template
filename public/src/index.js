import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Import the top-level component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') // Assumes there's a div with id='root' in your index.html
);