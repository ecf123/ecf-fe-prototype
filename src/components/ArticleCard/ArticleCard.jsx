import React from 'react';
import './ArticleCard.scss';
import SaveButton from '../SaveButton/SaveButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ thumbnail, category, title, index, isActive, id}) => {
  const [isPressed, setIsPressed] = useState(isActive);

  const onSaveButtonPress = () => {
    setIsPressed(!isPressed);
  };

  const navigate = useNavigate();

  const navigateToArticle = () => {
    navigate('/articles/' + id);
  };

  return (
    <div className="article-card" key={index}>
      <div className="article-card__content" onClick={navigateToArticle}>
        <img
          data-testid="thumbnail"
          className="article-card__image"
          src={thumbnail}
          alt={category}
        />
        <div className="article-card__text">
          <h3 className="article-card__text--top">{category}</h3>
          <h2 className="article-card__text--bottom">{title}</h2>
        </div>
      </div>
      <SaveButton
        handleSaveButtonPress={onSaveButtonPress}
        isPressed={isPressed}
      />
    </div>
  );
};

export default ArticleCard;