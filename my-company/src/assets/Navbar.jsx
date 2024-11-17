// Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: for custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="Home.jsx">Home</Link>
        </li>
        <li>
          <Link to="About.jsx">About</Link>
        </li>
        <li>
          <Link to="Services.jsx">Services</Link>
        </li>
        <li>
          <Link to="Contact.jsx">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
