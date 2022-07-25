import React from "react";
import PathwaysCard from "../../components/PathwaysCard/PathwaysCard";
import card from "../../assets/data/dummyPathwayData";
import "./PathwayCardList.scss";

const PathwayCardList = ({filter}) => {



  const JSX = card.map((card, index) => (
    if(card.category = filter){
      return   <PathwaysCard
      key={index}
      id={card.id}
      header={card.header}
      image={card.image}
      topics={card.topics}
      percentage={card.percentage}
      category={card.category}
    />
    } else { 
      (card.category = all)
      return   <PathwaysCard
      key={index}
      id={card.id}
      header={card.header}
      image={card.image}
      topics={card.topics}
      percentage={card.percentage}
      category={card.category}
    />
    }
  ));


  // const JSX = card.map((card, index) => (
  //   <PathwaysCard
  //     key={index}
  //     id={card.id}
  //     header={card.header}
  //     image={card.image}
  //     topics={card.topics}
  //     percentage={card.percentage}
  //     category={card.category}
  //   />
  // ));

  return <div className="pathway-card-list-content">{JSX}</div>;
};

export default PathwayCardList;
