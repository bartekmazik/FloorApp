import React, { useState } from "react";
import "../styles/Build.css";
import { Link } from "react-router-dom"; // Import Link

function Build(props) {
  const { setPanelWidth, setPanelHeight, setRoomWidth, setRoomHeight } = props;

  // State variables to store the input values
  const [roomWidthInput, setRoomWidthInput] = useState("");
  const [roomHeightInput, setRoomHeightInput] = useState("");
  const [panelWidthInput, setPanelWidthInput] = useState("");
  const [panelHeightInput, setPanelHeightInput] = useState("");

  const handlePanelWidth = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 500) {
      setPanelWidth(value);
      setPanelWidthInput(value);
    }
  };
  const handlePanelHeight = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 500) {
      setPanelHeight(value);
      setPanelHeightInput(value);
    }
  };
  const handleRoomWidth = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 15) {
      setRoomWidth(value);
      setRoomWidthInput(value);
    }
  };
  const handleRoomHeight = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 15) {
      setRoomHeight(value);
      setRoomHeightInput(value);
    }
  };

  return (
    <div>
      <form className="formContainer">
        <label>Insert width of your room (m)</label>
        <input
          type="number"
          min="1"
          max="15"
          value={roomWidthInput}
          onChange={handleRoomWidth}
        />
        <label>Insert length of your room (m)</label>
        <input
          type="number"
          min="1"
          max="15"
          value={roomHeightInput}
          onChange={handleRoomHeight}
        />
        <label>Insert width of your panel (cm)</label>
        <input
          type="number"
          min="1"
          max="500"
          value={panelWidthInput}
          onChange={handlePanelWidth}
        />
        <label>Insert height of your panel (cm)</label>
        <input
          type="number"
          min="1"
          max="500"
          value={panelHeightInput}
          onChange={handlePanelHeight}
        />
        <Link to="/result" className="submitButton">
          Calculate
        </Link>
      </form>
    </div>
  );
}

export default Build;
