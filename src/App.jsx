import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Import your home page component
import About from "./pages/About";
import Contact from "./pages/Contact";
import Build from "./pages/Build";
import Footer from "./components/Footer";
import FloorGrid from "./components/FloorGrid";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/build" element={<Build />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/result" element={<FloorGrid />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
