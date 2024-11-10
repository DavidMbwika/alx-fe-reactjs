import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navbarStyle = {
        padding: '10px',
        backgroundColor: '#333',
        color: 'white',
      };
      
      const navListStyle = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
      };
      
      const linkStyle = {
        color: 'white',
        textDecoration: 'none',
      };
      
      const linkHoverStyle = {
        textDecoration: 'underline',
      };
      

  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkHoverStyle}>About</Link></li>
        <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;