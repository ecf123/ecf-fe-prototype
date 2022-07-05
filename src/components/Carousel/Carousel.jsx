import React from "react";
import "./Carousel.scss";
import PathwaysCard from "../PathwaysCard/PathwaysCard";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__item">
        <PathwaysCard />
      </div>
      <div className="carousel__item">
        <PathwaysCard />
      </div>
      <div className="carousel__item">
        <PathwaysCard />
      </div>
      <div className="carousel__item">
        <PathwaysCard />
      </div>
      <div className="carousel__item">
        <PathwaysCard />
      </div>
      <div className="carousel__item">
        <PathwaysCard />
      </div>
    </div>
  );
};

export default Carousel;
