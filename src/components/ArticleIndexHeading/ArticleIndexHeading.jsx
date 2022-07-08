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
      <h1 data-testid="article-heading" className="article-index-card__title">{pickedArticle[0].title}</h1>
      <div className="article-index-card__info">
        <img className="article-index-card__info__img" src={bookIcon} alt="book icon"/>
        <p className="article-index-card__info__time">{pickedArticle[0].readTime}</p>
        <p className="article-index-card__info__date">{pickedArticle[0].date}</p>
      </div>
    </article>
  );
};

export default ArticleIndexHeading;
