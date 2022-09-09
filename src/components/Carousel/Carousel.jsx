import React from "react";
import "./Carousel.scss";
import PathwaysCard from "../PathwaysCard/PathwaysCard";

const Carousel = ({ cardData }) => {
  return (
    <div className="carousel" data-testid="carousel">
      {cardData.map((item, index) => {
        return (
          <div key={"carousel" + item.id} className="carousel__item" data-testid={"carousel__item" + index}>
            <PathwaysCard
              id={item.id}
              header={item.header}
              topics={item.topics}
              image={item.image}
              percentage={item.percentage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
