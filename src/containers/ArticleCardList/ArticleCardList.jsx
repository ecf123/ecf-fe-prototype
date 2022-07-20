import React from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import "./ArticleCardList.scss"

const ArticleCardList = ({ articleInfo }) => {
  const articleCardJSX = articleInfo.map((article, index) => {
    return (
      <ArticleCard
        index={index}
        thumbnail={article.thumbnail}
        category={article.category}
        title={article.title}
        isActive={article.isActive}
        id={article.id}
      />
    );
  });

  return <div data-testid="article-card-component" className='article-card-list'>{articleCardJSX}</div>;
};

export default ArticleCardList;