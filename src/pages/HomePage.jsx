import React from "react";
import "../styles/HomePage.css";
import { Link } from "react-router-dom"; // Import Link

const images = ["floor1.jpeg", "floor2.jpeg", "floor3.jpeg"];

const delay = 2000;

function HomePage() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="HomeContainer">
      <div className="welcomeInfo">Simplify your floor laying</div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, idx) => (
            <img
              className="slide"
              key={idx}
              src={`../src/assets/${image}`}
              alt={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      <Link to="/build" className="startButton">
        Build
      </Link>
    </div>
  );
}

export default HomePage;
