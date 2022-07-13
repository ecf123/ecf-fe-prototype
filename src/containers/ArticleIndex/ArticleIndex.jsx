import React from 'react'
import ArticleIndexHeading from '../../components/ArticleIndexHeading/ArticleIndexHeading'


// path: /articles/:articleId

const ArticleIndex = ({articleArray}) => {
  return (
    <div>
      <ArticleIndexHeading articleArray={articleArray}/> 
    </div>
  )
}

export default ArticleIndex