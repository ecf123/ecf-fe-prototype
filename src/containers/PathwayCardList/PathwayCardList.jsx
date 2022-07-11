import React from "react";
import PathwaysCard from "../../components/PathwaysCard/PathwaysCard";
import card from "../../assets/data/dummyPathwayData";
import "./PathwayCardList.scss";

const PathwayCardList = () => {
  const JSX = card.map((card, index) => <PathwaysCard key={index} header={card.header} image={card.image} topics={card.topics} percentage={index + 20} />);

  return <div className="pathway-card-list-content">{JSX}</div>;
};

export default PathwayCardList;
