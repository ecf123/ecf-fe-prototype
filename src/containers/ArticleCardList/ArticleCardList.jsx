import React from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

const ArticleCardList = ({articleInfo}) => {


  const buttonPressed = (event) => {
    console.log(event.target.className);
    event.target.className += " article-card__button--active"
  }


  const articleCardJSX = articleInfo.map((article, index) => {
    return <ArticleCard handleBookmarkPress={buttonPressed} key={index} thumbnail={article.thumbnail} category={article.category} title={article.title}/> 
  })

  return (
    <>
    {articleCardJSX}
    </>
  )
}

export default ArticleCardList