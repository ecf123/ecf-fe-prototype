import React from 'react'
import {useParams} from "react-router-dom"
import bookIcon from "../../assets/images/book-icon.svg"
import "./ArticleIndexHeading.scss"


const ArticleIndexHeading = ({articleArray}) => {
  const {articleId}= useParams();

  const pickedArticle = articleArray.filter(article=>{
    if(articleId===article.id){
      return article;
    }
  })
  

  return (
   <article>
      <h1>{pickedArticle.title}</h1>
      <div>
      <p><img src={bookIcon} alt="book icon"/>{pickedArticle.readTime}</p>
      <p>{pickedArticle.date}</p>

      </div>
      


   </article>
  )
}

export default ArticleIndexHeading