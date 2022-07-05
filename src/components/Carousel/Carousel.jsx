import React, { useState } from "react";
import "./Carousel.scss";
import PathwaysCard from "../PathwaysCard/PathwaysCard";


const Carousel = props => {
    const { imagesArr } = props;
    const [counter, setCounter] = useState(0);
  
    const handleIncrement = () => {
      if (counter === imagesArr.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    };
  
    const handleDecrement = () => {
      if (counter === 0) {
        setCounter(imagesArr.length - 1);
      } else {
        setCounter(counter - 1);
      }
    };
  
    return (
      <div className="carousel">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={handleDecrement}
          className="carousel__arrow carousel__arrow--left"
        />
        <img src={PathwaysCard[counter]} alt="" className="carousel__image" />
        <img
          src={rightArrow}
          alt="right arrow"
          onClick={handleIncrement}
          className="carousel__arrow carousel__arrow--right"
        />
      </div>
    );
  };

export default Carousel