import React from 'react';
import ArticleCardList from '../ArticleCardList/ArticleCardList';
import articleInfo from '../../assets/data/dummyArticleCardInformation';


// path: /articles

const Articles = () => {
  return (
    <div><ArticleCardList articleInfo={articleInfo}/></div>
  )
}

export default Articles