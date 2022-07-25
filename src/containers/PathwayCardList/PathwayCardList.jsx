import React, { useState } from "react";
import PathwaysCard from "../../components/PathwaysCard/PathwaysCard";
import card from "../../assets/data/dummyPathwayData";
import "./PathwayCardList.scss";

const PathwayCardList = ({ filter }) => {
  const initialJSXArray = card.map((card, index) => (
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

  const [JSX, setJSX] = useState(initialJSXArray);

  if (filter != "all") {
    setJSX(initialJSXArray.filter((element) => (element.category == filter)));
  }

  return <div className="pathway-card-list-content">{JSX}</div>;
};

export default PathwayCardList;
