import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="Logo">FloorBuilder</div>
        <div className="Menu">
          {/* Use Link for navigation */}
          <Link to="/" className="MenuItem">
            Home
          </Link>
          <Link to="/build" className="MenuItem">
            Build
          </Link>
          <Link to="/about" className="MenuItem">
            About
          </Link>
          <Link to="/contact" className="MenuItem">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
