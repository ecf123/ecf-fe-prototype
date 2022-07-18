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

  const pickedArticle = articleArray.find(({ id }) => id === parseInt(articleId));

  const [isPressed, setIsPressed] = useState(pickedArticle.isActive);

  const onSaveButtonPress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div className='articleIndex'>
      <header className="articleIndex__header">
        <div className="articleIndex__backButton">
          <BackButton linkTo="/articles" />
        </div>
        <div className="articleIndex__saveButton">
        <SaveButton handleSaveButtonPress={onSaveButtonPress} isPressed={isPressed} />
        </div>
      </header>
      <ArticleIndexHeading articleArray={articleArray} />
      <div className='articleIndex__container'>
        {pickedArticle.articleContent.map((item, index) => {
          return (
            <div className='articleIndex__content' data-testid="articleContent" key={index}>
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