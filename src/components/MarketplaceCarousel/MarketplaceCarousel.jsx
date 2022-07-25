import React from 'react'
import "./MarketplaceCarousel"
import MarketplaceCard from '../MarketplaceCard/MarketplaceCard'
import "./MarketplaceCarousel.scss"

const MarketplaceCarousel = ({marketData, heading}) => {
    
  return (
    <div className="marketplace-carousel">
      <h1 className='marketplace-carousel__heading'>{heading}</h1>
      <div className="marketplace-carousel__carousel">
          {marketData.map(item => {
              
            return (
              <div key={item.id} className="marketplace-carousel__item">
                  <MarketplaceCard cardData={item} />
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default MarketplaceCarousel