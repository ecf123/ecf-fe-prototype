import React, {useParams} from 'react';
import BackButton from '../../components/BackButton/BackButton';
import TrophyStats from '../../components/TrophyStats/TrophyStats';
import Button from '../../components/Button/Button';
import './MarketplaceIndex.scss';

// path: /marketplace/:marketplaceId

const MarketplaceIndex = (props) => {
  const {userProfile} = props;
  //const index = useParams()

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
      <div className='marketplace-index__button-container'>
        <Button buttonText="Purchase"  />
      </div>

  </div>
  )
}

export default MarketplaceIndex