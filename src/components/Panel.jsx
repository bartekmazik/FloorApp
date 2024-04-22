import React from "react";
import "../styles/Panel.css";
const Panel = ({ elemWidth, elemHeight, content }) => {
  return (
    <div
      className="Panel"
      style={{ width: `${elemWidth / 20}rem`, height: `${elemHeight / 20}rem` }}
    >
      {content}
    </div>
  );
};

export default Panel;
