import React, {useParams} from 'react';
import BackButton from '../../components/BackButton/BackButton';
import TrophyStats from '../../components/TrophyStats/TrophyStats';
import Button from '../../components/Button/Button';
import './MarketplaceIndex.scss';
import MarketplaceIndexOverview from "../../components/MarketplaceIndexOverview/MarketplaceIndexOverview";
import MarketplaceIndexRequirements from "../../components/MarketplaceIndexRequirements/MarketplaceIndexRequirements";

// path: /marketplace/:marketplaceId

const MarketplaceIndex = (props) => {
  const {userProfile} = props;
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
      <MarketplaceIndexRequirements marketData={marketData} />
      <MarketplaceIndexOverview marketData={marketData} />
      <div className='marketplace-index__button-container'>
        <Button buttonText="Purchase"  />
      </div>

  </div>
  )
}

export default MarketplaceIndex;
