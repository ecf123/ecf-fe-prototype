import React from "react";
import { useState } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const ArticleCardList = ({ articleInfo }) => {
  const [isActive, setIsActive] = useState(false);

  const onSaveButtonPress = (event) => {
    setIsActive(!isActive);
    isActive
      ? (event.target.className += " save-button--active")
      : (event.target.className = "save-button--save");
  };

  const articleCardJSX = articleInfo.map((article, index) => {
    return (
      <ArticleCard
        handleSaveButtonPress={onSaveButtonPress}
        key={index}
        thumbnail={article.thumbnail}
        category={article.category}
        title={article.title}
      />
    );
  });

  return <div data-testid = "article-card-component">{articleCardJSX}</div>;
};

export default ArticleCardList;
