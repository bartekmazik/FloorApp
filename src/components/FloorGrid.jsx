import React, { useEffect, useState } from "react";
import "../styles/FloorGrid.css";
import Panel from "./Panel";

function FloorGrid() {
  const Width = 80; // initial width of a panel
  const Height = 40; // initial height of a panel
  const roomWidth = 543;
  const roomHeight = 721;
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
    if (indexY % 2 == 1) {
      //indexY defines pattern of a row
      if (indexX == panelsInRow) {
        //defines if its a last panel in a row
        indexX = 1;
        indexY += 1;
        return roomWidth % Width;
      } else if (indexX == 1) {
        //defines if its a first panel in a row
        indexX += 1;
        return Width;
      } else {
        //default
        indexX += 1;
        return Width;
      }
    } else {
      if (indexX == panelsInRow) {
        indexX = 1;
        indexY += 1;
        return rest;
      } else if (indexX == 1) {
        indexX += 1;
        return Width - (roomWidth % Width);
      } else {
        indexX += 1;
        return Width;
      }
    }
  }
  function calculatePanelHeightProperly() {
    if (indexY == panelsInColumn) {
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
          {[...Array(listaPaneli)].map(() => {
            return (
              <Panel
                elemHeight={calculatePanelHeightProperly()}
                elemWidth={calculatePanelWidthProperly()}
                content={content}
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
