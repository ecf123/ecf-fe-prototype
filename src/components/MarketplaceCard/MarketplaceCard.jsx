import React from 'react'
import trophy from "./../../assets/images/trophy-icon.svg"
import xp from "./../../assets/images/xp-icon.svg"
import lock from "./../../assets/images/lock.svg"
import "./MarketplaceCard.scss"

const MarketplaceCard = ({ cardData }) => {

  const {image, heading, trophies, skillPoints, isLocked} = cardData;

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

        <img data-testid="marketplace-card-img" className='marketplace-card__img-container__img' src={image} alt={heading}/>
      </div>
      
      <h1 className='marketplace-card__title'>{heading}</h1>
      <div className='marketplace-card__requirements'>
        <div className='marketplace-card__requirements__requirement'>
          <img className='marketplace-card__requirements__requirement__img'src={trophy} alt="Trophies"/>
          <p className='marketplace-card__requirements__requirement__number'>{trophies}</p>
        </div>
        <div className='marketplace-card__requirements__requirement'>
          <img className='marketplace-card__requirements__requirement__img' src={xp} alt="Skill points"/>
          <p className='marketplace-card__requirements__requirement__number'>{skillPoints}</p>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceCard