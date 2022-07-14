import { React, useState } from 'react'
import ArticleIndexHeading from '../../components/ArticleIndexHeading/ArticleIndexHeading';
import Navigation from '../../components/Navigation/Navigation';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import SaveButton from '../../components/SaveButton/SaveButton';
import "./ArticleIndex.scss";
// path: /articles/:articleId


const ArticleIndex = ({ articleArray }) => {
  const { articleId } = useParams();

  const pickedArticle = articleArray.find(({ id }) => id === parseInt(articleId))



  const [isPressed, setIsPressed] = useState(pickedArticle.isActive);

  const onSaveButtonPress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div className='articleIndex'>
      <div className='articleIndex__header' >
        <BackButton linkTo="/articles" />
        <SaveButton handleSaveButtonPress={onSaveButtonPress} isPressed={isPressed} />
      </div>
      <ArticleIndexHeading articleArray={articleArray} />
      <div className='articleIndex__container'>
        {pickedArticle.articleContent.map((item, index) => {
          return (
            <div className='articleIndex__content' key={index}>
              <h2 className='articleIndex__heading'>{item.heading}</h2>
              <p className='articleIndex__paragraph'>{item.paragraph}</p>
            </div>)

        })}

      </div>
      <Navigation />
    </div>

  )
}

export default ArticleIndex