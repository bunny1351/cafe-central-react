import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
