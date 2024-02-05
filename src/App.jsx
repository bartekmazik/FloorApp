import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./components/FloorGrid";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Import your home page component
import About from "./pages/About";
import Contact from "./pages/Contact";
import Build from "./pages/Build";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/build" element={<Build />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
