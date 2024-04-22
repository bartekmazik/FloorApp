import React from "react";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomeContainer">
      <div className="welcomeInfo">Simplify your floor laying</div>
      <Link to="/build" className="startButton">
        Build
      </Link>
    </div>
  );
}

export default HomePage;
