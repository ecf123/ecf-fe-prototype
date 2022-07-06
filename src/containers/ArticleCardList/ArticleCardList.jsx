import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { Link } from "react-router-dom";

const ArticleCardList = ({ articleInfo }) => {
  const articleCardJSX = articleInfo.map((article, index) => {
    return (
      // <Link to={"/articles/" + article.id}>
      <ArticleCard
        key={index}
        thumbnail={article.thumbnail}
        category={article.category}
        title={article.title}
        isActive={article.isActive}
        id={article.id}
      />
      // </Link>
    );
  });

  return <div data-testid="article-card-component">{articleCardJSX}</div>;
};

export default ArticleCardList;
