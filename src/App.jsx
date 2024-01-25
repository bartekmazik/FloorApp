import { useState } from "react";
import "./components/FloorGrid";
import "./styles/App.css";
import "./components/Navbar";
import FloorGrid from "./components/FloorGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <FloorGrid></FloorGrid>
      </div>
    </>
  );
}

export default App;
