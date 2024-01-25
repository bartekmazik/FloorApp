import React, { useEffect, useState } from "react";
import "../styles/FloorGrid.css";
import Panel from "./Panel";

function FloorGrid() {
  let panelWidth = 80;
  let sumWidth = 0;
  let index = 0;
  let restOfPanelWidth = 0;
  const gridWidth = 700;
  function calculatePanelWidth() {
    console.log("sumWidth", sumWidth);
    console.log("gridWidth", gridWidth);
    console.log("index", index);
    console.log("panelWidth", panelWidth);
    console.log("restOfPanelWidth", restOfPanelWidth);

    if (gridWidth - sumWidth >= panelWidth) {
      // Check if it's not the first panel
      if (index > 0) {
        index += 1;
        panelWidth = 80;
        sumWidth += panelWidth;
        restOfPanelWidth = 0;
        return `${panelWidth}px`;
      } else {
        // Check if there's a remaining width from the last row
        if (restOfPanelWidth > 0) {
          index += 1;
          sumWidth += restOfPanelWidth;
          panelWidth = restOfPanelWidth;
          restOfPanelWidth = 0;
        } else {
          index += 1;
          panelWidth = 80;
          sumWidth += panelWidth;
        }
        return `${panelWidth}px`;
      }
    } else {
      // If the sum exceeds grid width, reset and calculate remaining width

      index = 0;
      panelWidth = gridWidth - sumWidth; //blond
      sumWidth = 0;
      restOfPanelWidth = 80 - panelWidth;
      return `${panelWidth}px`;
    }
  }

  const [listaPaneli, setListaPaneli] = useState([]);

  // Example initial data
  // Function to add a new panel to the list
  const addPanel = () => {
    setListaPaneli((prevList) => [...prevList, prevList.length + 1]);
  };

  // Function to remove a panel from the list
  const removePanel = (index) => {
    setListaPaneli((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="grid">
        {/* Map over the list of panels and render each one */}
        {listaPaneli.map((panel, index) => {
          return <Panel elemWidth={calculatePanelWidth()} key={index}></Panel>;
        })}
      </div>

      {/* Button to add a new panel */}
      <button onClick={addPanel}>Add Panel</button>

      {/* Example button to remove the last panel */}
      {listaPaneli.length > 0 && (
        <button onClick={() => removePanel(listaPaneli.length - 1)}>
          Remove Last Panel
        </button>
      )}
    </>
  );
}

export default FloorGrid;
