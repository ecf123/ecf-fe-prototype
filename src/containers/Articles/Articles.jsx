import React from 'react';
import ArticleCardList from '../ArticleCardList/ArticleCardList';

// path: /articles

const Articles = ({articleInfo}) => {
  return (
    <div><ArticleCardList articleInfo={articleInfo}/></div>
  )
}

export default Articles