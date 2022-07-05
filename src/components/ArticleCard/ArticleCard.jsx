import React from "react";
import "./ArticleCard.scss";
import favouriteButton from "../../assets/images/favourite-button.svg";

const ArticleCard = ({handleBookmarkPress,thumbnail, category, title, index}) => {
 
  return (
    <div key={index} className="article-card">
      <img className="article-card__image" src={thumbnail} alt={category}  />
      <div className="article-card__text">
        <h3 className="article-card__text--top">{category}</h3>
        <h2 className="article-card__text--bottom">{title}</h2>
      </div>
      <button onClick={handleBookmarkPress} className="article-card__button"><img className="article-card__button--bookmark" alt="Bookmark button" src={favouriteButton} /></button>
    </div>
  );
};

export default ArticleCard;
