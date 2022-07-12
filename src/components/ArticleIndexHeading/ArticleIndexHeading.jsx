import React from "react";
import { useParams } from "react-router-dom";
import bookIcon from "../../assets/images/book-icon.svg";
import "./ArticleIndexHeading.scss";

const ArticleIndexHeading = ({ articleArray }) => {
  const { articleId } = useParams();

  const pickedArticle = articleArray.filter((article) => {
    return articleId === article.id;
  });

  return (
    <article className="article-index-card">
      <h1 className="article-index-card__title">{pickedArticle.title}</h1>
      <div className="article-index-card__info">
        <p>
          <img
            className="article-index-card__info__time"
            src={bookIcon}
            alt="book icon"
          />
          {pickedArticle.readTime}
        </p>
        <p className="article-index-card__info__date">{pickedArticle.date}</p>
      </div>
    </article>
  );
};

export default ArticleIndexHeading;
