import React from "react";
import { useParams } from "react-router-dom";
import bookIcon from "../../assets/images/book-icon.svg";
import "./ArticleIndexHeading.scss";

const ArticleIndexHeading = ({ articleArray }) => {
  const { articleId } = useParams();
  console.log(articleId)

  const pickedArticle = articleArray.filter(article => {
    console.log(article.id);
    if (articleId == article.id) {
      console.log(article)
      return article;
    }
  });

  return (
    <article className="article-index-card">
      <h1 className="article-index-card__title">{pickedArticle[0].title}</h1>
      <div className="article-index-card__info">
        <p>
          <img
            className="article-index-card__info__time"
            src={bookIcon}
            alt="book icon"
          />
          {pickedArticle[0].readTime}
        </p>
        <p className="article-index-card__info__date">{pickedArticle[0].date}</p>
      </div>
    </article>
  );
};

export default ArticleIndexHeading;
