import React from 'react'
import trophy from "./../../assets/images/trophy-icon.svg"
import xp from "./../../assets/images/xp-icon.svg"
import "./MarketplaceCard.scss"

const MarketplaceCard = (props) => {
  const {img,title,trophies, score, imgTitle}=props;
  return (
    <div className='marketplace-card'>
      <img className='marketplace-card__img' src={img} alt={imgTitle}/>
      <h1 className='marketplace-card__title'>{title}</h1>
      <div className='marketplace-card__requirements'>
        <div className='marketplace-card__requirements__requirement'>
          <img className='marketplace-card__requirements__requirement__img'src={trophy} alt="trophy"/>
          <p className='marketplace-card__requirements__requirement__number'>{trophies}</p>
        </div>
        <div className='marketplace-card__requirements__requirement'>
          <img className='marketplace-card__requirements__requirement__img' src={xp} alt="score"/>
          <p className='marketplace-card__requirements__requirement__number'>{score}</p>
        </div>
      </div>
      
    </div>
  )
}

export default MarketplaceCard