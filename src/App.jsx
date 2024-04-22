import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Import your home page component
import About from "./pages/About";
import Build from "./pages/Build";
import Footer from "./components/Footer";
import FloorGrid from "./components/FloorGrid";
import { useState } from "react";

function App() {
  const [roomHeight, setRoomHeight] = useState(0);
  const [roomWidth, setRoomWidth] = useState(0);
  const [panelHeight, setPanelHeight] = useState(0);
  const [panelWidth, setPanelWidth] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/build"
            element={
              <Build
                setPanelHeight={setPanelHeight}
                setPanelWidth={setPanelWidth}
                setRoomHeight={setRoomHeight}
                setRoomWidth={setRoomWidth}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/result"
            element={
              <FloorGrid
                panelHeight={panelHeight}
                panelWidth={panelWidth}
                roomHeight={roomHeight}
                roomWidth={roomWidth}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
