import React, { useEffect, useState } from "react";
import "../styles/FloorGrid.css";
import Panel from "./Panel";

function FloorGrid() {
  const Width = 80; //poczatkowa dlugosc panela
  let panelWidth = Width; // zmienna dlugosc panela
  let panelHeight = 40; // jak wyzej
  let sumWidth = 0;
  let sumHeight = 0;
  let index = 0; // wystapienie panela w rzedzie (zaczyna sie potem od 1)
  let restOfPanelWidth = 0; // reszta panela do zaczynania kolejnego rzedu
  let content = "";
  const gridWidth = 750; // wymiary pokoju
  const gridHeight = 500;
  const rowCount = Math.ceil(gridHeight / panelHeight) + 1;
  const paneleWRzedzie = gridWidth / panelWidth;
  const panelCount = Math.ceil(rowCount * paneleWRzedzie);
  const totalAreaUsed = panelCount * panelHeight * panelWidth;
  function calculatePanelWidth() {
    if (gridWidth - sumWidth > panelWidth) {
      // jezeli panel wejdzie na miejsce do rzedu w calosci
      if (index > 0) {
        //sprawdzanie czy to pierwszy panel
        content = "-";
        index += 1;
        panelWidth = Width;
        restOfPanelWidth = 0;
        sumWidth += panelWidth;
        return `${panelWidth}px`;
      } else {
        //jezeli to pierwszy panel
        if (restOfPanelWidth > 0) {
          //jezeli zaczynamy od resztki
          content = "";
          index += 1;
          sumWidth += restOfPanelWidth;
          panelWidth = restOfPanelWidth;
          restOfPanelWidth = 0;
        } else {
          //jezeli zaczynamy od calego panela
          content = "-";
          index += 1;
          panelWidth = Width;
          sumWidth += panelWidth;
        }
        return `${panelWidth}px`;
      }
    } else {
      //jezeli panel nie ma wystarczajaco miejsca (koniec rzedu)
      content = "";
      panelWidth = gridWidth - sumWidth;
      sumWidth = 0;
      restOfPanelWidth = 80 - panelWidth;
      index = 0;
      return `${panelWidth}px`;
    }
  }
  function calculatePanelHeight() {
    if (index == 1) {
      //jezeli to pierwszy panel w rzedzie
      if (gridHeight - sumHeight >= panelHeight) {
        // jezeli to nie ostatni rzad
        sumHeight += panelHeight;
        return `${panelHeight}px`;
      }
      //jezeli to ostatni rzad
      else {
        content = "";
        //jezeli to ostatni rzad
        panelHeight = gridHeight - sumHeight;
        return `${panelHeight}px`;
      }
    } else {
      //jezeli to nie pierwszy panel w rzedzie
      return `${panelHeight}px`;
    }
  }
  function calculatePanelWidthProperly() {}
  function calculatePanelHeightProperly() {}
  const [listaPaneli, setListaPaneli] = useState(panelCount);

  return (
    <div className="Container">
      <div className="Width">{`${gridWidth / 100} m`}</div>
      <div className="buildContent">
        <div className="Height">{`${gridHeight / 100} m`}</div>
        <div
          className="grid"
          style={{ height: gridHeight + "px", width: gridWidth + "px" }}
        >
          {[...Array(listaPaneli)].map(() => {
            return (
              <Panel
                elemWidth={calculatePanelWidth()}
                elemHeight={calculatePanelHeight()}
                content={content}
                key={index}
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
