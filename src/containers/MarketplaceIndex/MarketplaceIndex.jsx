import React from 'react';
import { useParams } from "react-router-dom";
import BackButton from '../../components/BackButton/BackButton';
import TrophyStats from '../../components/TrophyStats/TrophyStats';
import Button from '../../components/Button/Button';
import './MarketplaceIndex.scss';
import MarketplaceIndexOverview from "../../components/MarketplaceIndexOverview/MarketplaceIndexOverview";
import MarketplaceIndexRequirements from "../../components/MarketplaceIndexRequirements/MarketplaceIndexRequirements";

// path: /marketplace/:marketplaceId

const MarketplaceIndex = (props) => {
  const {marketData, userProfile} = props;
  const { marketplaceId } = useParams();
  const pickedMarketCard = marketData.find(
    ({ id }) => id === parseInt(marketplaceId)
  );
  return (
    <div className='marketplace-index'>
      <header className='marketplace-index__header'>
        <div className='marketplace-index__back-button'>
          <BackButton linkTo="/marketplace" />
        </div>
        <div className='marketplace-index__trophy'>
          <TrophyStats userProfile={userProfile} />
        </div>
      </header>
      <img src={pickedMarketCard.image}  alt=""/>
      <h1 className='marketplace-index__heading'>{pickedMarketCard.heading}</h1>
      <MarketplaceIndexRequirements marketData={marketData} />
      <MarketplaceIndexOverview marketData={marketData} />
      <div className='marketplace-index__button-container'>
        <Button buttonText="Purchase"  />
      </div>

  </div>
  )
}

export default MarketplaceIndex;
