import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Import the top-level component
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);