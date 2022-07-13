import React from 'react'
import TrophyIcon from "../../assets/images/trophy-icon.svg";
import XpIcon from "../../assets/images/xp-icon.svg";
import { useParams } from "react-router-dom";
import "./MarketplaceIndexRequirements.scss"

const MarketplaceIndexRequirements = ({ marketData }) => {
    const { marketplaceId } = useParams();
    const pickedMarketCard = marketData.find(
        ({ id }) => id === parseInt(marketplaceId)
    );

    const { trophies, skillPoints } = pickedMarketCard;

  return (
    <div className='marketplace-requirements'>
        <h1 className='marketplace-requirements__title'>Requirements</h1>
        <div className='marketplace-requirements__info'>
            <img className='marketplace-requirements__info-img' src={XpIcon} alt="xp" />
            <p className='marketplace-requirements__info-points'>{skillPoints}</p>
            <img className='marketplace-requirements__info-img' src={TrophyIcon} alt="trophies" />
            <p className='marketplace-requirements__info-points'>{trophies}</p>
        </div>
        
    </div>
  )
}

export default MarketplaceIndexRequirements