import React from "react";
import { useParams } from "react-router-dom";
import bookIcon from "../../assets/images/book-icon.svg";
import "./ArticleIndexHeading.scss";

const ArticleIndexHeading = ({ articleArray }) => {
  const { articleId } = useParams();

  const pickedArticle = articleArray.find( ({ id }) => id === parseInt(articleId))

  return (
    <article className="article-index-card">
      <h1 data-testid="heading" className="article-index-card__title">{pickedArticle.title}</h1>
      <div className="article-index-card__info">
        <img className="article-index-card__info__img" src={bookIcon} alt="book icon"/>
        <p data-testid="time" className="article-index-card__info__time">{pickedArticle.readTime}</p>
        <p data-testid="date" className="article-index-card__info__date">{pickedArticle.date}</p>
      </div>
    </article>
  );
};

export default ArticleIndexHeading;
