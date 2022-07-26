import React from "react";
import PathwaysCard from "../../components/PathwaysCard/PathwaysCard";
import "./PathwayCardList.scss";

const PathwayCardList = ({ cards }) => {
  const JSX = cards.map((card, index) => (
    <PathwaysCard
      key={index}
      id={card.id}
      header={card.header}
      image={card.image}
      topics={card.topics}
      percentage={card.percentage}
      category={card.category}
    />
  ));

  return <div className="pathway-card-list-content">{JSX}</div>;
};

export default PathwayCardList;
