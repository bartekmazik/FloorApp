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
  const gridWidth = 700; // wymiary pokoju
  const gridHeight = 500;

  let [totalAreaUsed, setTotalAreaUsed] = useState(0);
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

  const [listaPaneli, setListaPaneli] = useState([]);

  // Example initial data
  // Function to add a new panel to the list
  const addPanel = () => {
    setListaPaneli((prevList) => [...prevList, prevList.length + 1]);
    const calculatedArea = panelWidth * panelHeight;
    console.log(calculatedArea / 100);
    setTotalAreaUsed(totalAreaUsed + calculatedArea);
  };

  // Function to remove a panel from the list
  const removePanel = (index) => {
    setListaPaneli((prevList) => prevList.filter((_, i) => i !== index));
    const calculatedArea = panelWidth * panelHeight;
    setTotalAreaUsed(totalAreaUsed - calculatedArea);
  };

  return (
    <div className="Container">
      <div className="Width">{`${gridWidth / 100} m`}</div>
      <div className="buildContent">
        <div className="Height">{`${gridHeight / 100} m`}</div>
        <div className="grid">
          {/* Map over the list of panels and render each one */}
          {listaPaneli.map((panel, index) => {
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
      <div className="buttons">
        <button onClick={addPanel}>Add Panel</button>
        {listaPaneli.length > 0 && (
          <button onClick={() => removePanel(listaPaneli.length - 1)}>
            Remove Last Panel
          </button>
        )}
      </div>
      <div style={{ fontSize: "18px", marginTop: "20px" }}>
        Total Area: <span>{totalAreaUsed / 10000 + (totalAreaUsed % 10)}</span>{" "}
        m<sup>2</sup>
      </div>
    </div>
  );
}

export default FloorGrid;
