import React from "react";
import "../styles/Panel.css";
const Panel = ({ elemWidth, elemHeight, content }) => {
  return (
    <div
      className="Panel"
      style={{ width: `${elemWidth}px`, height: `${elemHeight}px` }}
    >
      {content}
    </div>
  );
};

export default Panel;
