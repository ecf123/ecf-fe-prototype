import React, {useState, useEffect} from "react";
import "./Carousel.scss";
import PathwaysCard from "../PathwaysCard/PathwaysCard";

const Carousel = (props) => {
  const {children} = props;
  const [touchPosition, setTouchPosition] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  //Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }
  };

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  // const currentTouch = e.touches[0].clientX;
  // const diff = touchDown - currentTouch;

  // if (diff > 5) {
  //   next();
  // }

  // if (diff < -5) {
  //   prev();
  // }

  setTouchPosition(null);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
        <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <div className="carousel-content" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {children}
          </div>
        </div>
        <button onClick={next} className="right-arrow">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
