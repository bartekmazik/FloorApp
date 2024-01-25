import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="Logo">FloorBuilder</div>
        <div className="Menu">
          <div className="MenuItem">Home</div>
          <div className="MenuItem">About</div>
          <div className="MenuItem">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
