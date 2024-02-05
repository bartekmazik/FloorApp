import React from "react";
import "../styles/Footer.css";
import { Facebook, GitHub, LinkedIn, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <div className="FooterContainer">
      <span>Made by maziol</span>
      <div className="icons">
        <Instagram />
        <Facebook />
        <LinkedIn />
        <GitHub />
      </div>
    </div>
  );
}

export default Footer;
