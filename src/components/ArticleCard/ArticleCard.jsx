import React from "react";
import "./ArticleCard.scss";
import SaveButton from "../SaveButton/SaveButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ thumbnail, category, title, index, isActive, id }) => {
  const [isPressed, setIsPressed] = useState(isActive);

  const onSaveButtonPress = () => {
    setIsPressed(!isPressed);
  };

  return (
    // <Link href={"/articles/" + id} key={index}>
      <div className="article-card">
        <img
          data-testid="thumbnail"
          className="article-card__image"
          src={thumbnail}
          alt={category}
        />
        <div className="article-card__text">
          <h3 className="article-card__text--top">{category}</h3>
          <h2 className="article-card__text--bottom">{title}</h2>
        </div>
        <SaveButton
          handleSaveButtonPress={onSaveButtonPress}
          isPressed={isPressed}
        />
      </div>
    // </Link>
  );
};

export default ArticleCard;
