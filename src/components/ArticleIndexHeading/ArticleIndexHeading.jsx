import React from "react";
import { useParams } from "react-router-dom";
import bookIcon from "../../assets/images/book-icon.svg";
import "./ArticleIndexHeading.scss";

const ArticleIndexHeading = ({ articleArray }) => {
  const { articleId } = useParams();

  const pickedArticle = articleArray.filter(article => {
    const selectedArticle = {}
    if (articleId === article.id) {
      selectedArticle = article;
    }
    return selectedArticle;
  });

  return (
    <article className="article-index-card">
      <h1 data-testid="article-heading" className="article-index-card__title">{pickedArticle[0].title}</h1>
      <div className="article-index-card__info">
        <img className="article-index-card__info__img" src={bookIcon} alt="book icon"/>
        <p data-testid="article-time" className="article-index-card__info__time">{pickedArticle[0].readTime}</p>
        <p data-testid="article-date" className="article-index-card__info__date">{pickedArticle[0].date}</p>
      </div>
    </article>
  );
};

export default ArticleIndexHeading;
