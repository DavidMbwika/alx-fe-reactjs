// Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: for custom styles

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#333",
    padding: "1rem",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const hoverStyle = {
    color: "#00bcd4",
  };
  return (
    <nav style={navStyle} className="navbar">
      <ul style={ulStyle} className="navbar-links">
        <li style={linkStyle}>
          <Link style={hoverStyle} to="Home.jsx">Home</Link>
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
