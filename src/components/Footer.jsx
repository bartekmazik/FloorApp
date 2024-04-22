import React from "react";
import "../styles/Footer.css";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="FooterContainer">
      <span>Made by Bartłomiej Mazik 2024</span>
      <div className="icons">
        <a href="https://www.linkedin.com/in/bart%C5%82omiej-mazik-a4075226b/">
          <LinkedIn />
        </a>
        <a href="https://github.com/bartekmazik">
          <GitHub />
        </a>
      </div>
    </div>
  );
}

export default Footer;
