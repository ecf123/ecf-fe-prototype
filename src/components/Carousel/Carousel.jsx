import React from "react";
import "./Carousel.scss";
import PathwaysCard from "../PathwaysCard/PathwaysCard";

const Carousel = ({cardData}) => {
  return (
    <div className="carousel" data-testid="carousel">
        {cardData.map((item, index) => {
          return (
            <div key={index} className="carousel__item" data-testid="carousel__item">
              <PathwaysCard card={item} />
            </div>
          );
        })}
    </div>
  );
};

export default Carousel;