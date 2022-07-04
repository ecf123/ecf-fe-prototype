import React from 'react'
import trophy from "./../../assets/images/trophy-icon.svg"
import xp from "./../../assets/images/xp-icon.svg"
import lock from "./../../assets/images/lock.svg"
import "./MarketplaceCard.scss"

const MarketplaceCard = (props) => {

  const {img, title, trophies, score, imgTitle, isLocked} = props;

  return (
    <div
      className='marketplace-card'
      data-testid="marketplace-card"
    >

      <div className='marketplace-card__img-container'
        >
        {isLocked 
          ? <div className='marketplace-card__img-container__overlay--locked'>
              <img data-testid="marketplace-card-lock" src={lock} alt="lock" className='marketplace-card__img-container__overlay--locked__lock' />
            </div> 
          : <div className='marketplace-card__img-container__overlay'></div>}

        <img data-testid="marketplace-card-img" className='marketplace-card__img-container__img' src={img} alt={imgTitle}/>
      </div>
      
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