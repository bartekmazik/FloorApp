import React, { useEffect, useState } from "react";
import "../styles/FloorGrid.css";
import Panel from "./Panel";

function FloorGrid(props) {
  const Width = props.panelWidth;
  const Height = props.panelHeight;
  const roomWidth = props.roomWidth * 100;
  const roomHeight = props.roomHeight * 100;
  const panelsInColumn = Math.ceil(roomHeight / Height);
  const panelsInRow = Math.ceil(roomWidth / Width);
  const panelCount = Math.ceil(panelsInColumn * panelsInRow);
  const totalAreaUsed = panelCount * Height * Width;
  const rest =
    roomWidth - Width * (panelsInRow - 2) - (Width - (roomWidth % Width));
  let indexX = 1; // panel position in a row
  let indexY = 1; // panel position in a column
  let content = "";

  function calculatePanelWidthProperly() {
    if (indexY % 2 === 1) {
      // Odd row
      if (indexX === panelsInRow) {
        // Last panel in the row
        indexX = 1;
        indexY += 1;
        return roomWidth % Width;
      } else if (indexX === 1) {
        // First panel in the row
        indexX += 1;
        return Width;
      } else {
        // Default case
        indexX += 1;
        return Width;
      }
    } else {
      // Even row
      if (indexX === panelsInRow && roomWidth % Width !== 0) {
        // Last panel in an even row with uneven room width
        indexX = 1;
        indexY += 1;
        return roomWidth % Width;
      } else if (indexX === panelsInRow) {
        // Last panel in an even row with even room width
        indexX = 1;
        indexY += 1;
        return Width;
      } else if (indexX === 1) {
        // First panel in the row
        indexX += 1;
        return Width - (roomWidth % Width);
      } else {
        // Default case
        indexX += 1;
        return Width;
      }
    }
  }

  function calculatePanelHeightProperly() {
    if (indexY === panelsInColumn && roomHeight % Height !== 0) {
      return roomHeight % Height;
    } else {
      return Height;
    }
  }
  const [listaPaneli, setListaPaneli] = useState(panelCount);

  return (
    <div className="Container">
      <div className="Width">{`${roomWidth / 100} m`}</div>
      <div className="buildContent">
        <div className="Height">{`${roomHeight / 100} m`}</div>
        <div
          className="grid"
          style={{ height: roomHeight + "px", width: roomWidth + "px" }}
        >
          {[...Array(listaPaneli)].map((i) => {
            return (
              <Panel
                elemHeight={calculatePanelHeightProperly()}
                elemWidth={calculatePanelWidthProperly()}
                content={content}
                key={i}
              ></Panel>
            );
          })}
        </div>
      </div>
      <div style={{ fontSize: "18px", marginTop: "20px" }}>
        Total Panel Area Needed:{" "}
        <strong>{totalAreaUsed / 10000 + (totalAreaUsed % 10)} m</strong>
        <strong>
          <sup>2</sup>
        </strong>
      </div>
      <div style={{ fontSize: "18px", marginTop: "20px" }}>
        Total amount of panels: <strong>{panelCount}</strong>
      </div>
    </div>
  );
}

export default FloorGrid;
