import React from "react";
import "./ArticleCard.scss";
import favouriteButton from "../../assets/images/favourite-button.svg";

const ArticleCard = (props) => {
  const { articleInfo } = props;

  const array = articleInfo.map(article => {
    
  }

  )
  return (
    <div className="article-card">
      <img className="article-card__image" src={thumbnail} />
      <div className="article-card__text">
        <h3 className="article-card__text--top">{category}</h3>
        <h2 className="article-card__text--bottom">{title}</h2>
      </div>
      <img className="article-card__bookmark" src={favouriteButton} />
    </div>
  );
};

export default ArticleCard;
