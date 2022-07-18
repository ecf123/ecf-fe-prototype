import React from 'react'
import "./MarketplaceCarousel"
import MarketplaceCard from '../MarketplaceCard/MarketplaceCard'


const MarketplaceCarousel = ({marketData}) => {
    
  return (
    <div className="carousel">
        {marketData.map(item => {
            
          return (
            <div key={item.id} className="carousel__item">
                <MarketplaceCard cardData={item} />
            </div>
          );
        })}
    </div>
  )
}

export default MarketplaceCarousel