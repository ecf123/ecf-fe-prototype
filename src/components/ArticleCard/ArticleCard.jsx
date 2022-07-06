import React from "react";
import "./ArticleCard.scss";
import SaveButton from "../SaveButton/SaveButton";

const ArticleCard = ({
  handleSaveButtonPress,
  thumbnail,
  category,
  title,
  index,
}) => {
  return (
    <div key={index} className="article-card">
      <img className="article-card__image" src={thumbnail} alt={category} />
      <div className="article-card__text">
        <h3 className="article-card__text--top">{category}</h3>
        <h2 className="article-card__text--bottom">{title}</h2>
      </div>
      <SaveButton handleSaveButtonPress={handleSaveButtonPress} />
    </div>
  );
};

export default ArticleCard;
