import React from "react";
import "./Carousel.scss";
import PathwaysCard from "../PathwaysCard/PathwaysCard";

const Carousel = () => {
  return (
    <div className="carousel" data-testid="carousel">
      <div className="carousel__item">
        <PathwaysCard />
      </div>
      <div className="carousel__item" data-testid="carousel__item">
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
