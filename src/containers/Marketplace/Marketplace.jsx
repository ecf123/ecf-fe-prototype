import React from "react";
import MarketplaceCarousel from "../../components/MarketplaceCarousel/MarketplaceCarousel";
import Navigation from "../../components/Navigation/Navigation";
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader";
import "./Marketplace.scss"

// path: /marketplace

const Marketplace = ({ userProfile, marketData }) => {
  
  return (
    <div className="marketplace">
      <TrophyHeader userProfile={userProfile} />
      <h1 data-testid="heading" className="marketplace__heading">Marketplace</h1>
      <p className="marketplace__text">Use the XP you’ve successfully earnt to unlock great prizes and opportunities</p>
      <MarketplaceCarousel 
        heading="Under 100XP" 
        marketData={marketData.filter((card) => card.skillPoints < 100).sort((a, b) => Number(a.isLocked) - Number(b.isLocked))} 
      />
      <MarketplaceCarousel 
        heading="100 - 249XP" 
        marketData={marketData.filter((card) => (100 <= card.skillPoints && card.skillPoints <= 249)).sort((a, b) => Number(a.isLocked) - Number(b.isLocked))} 
      />
      <MarketplaceCarousel 
        heading="250 - 499XP" 
        marketData={marketData.filter((card) => (250 <= card.skillPoints && card.skillPoints <= 499)).sort((a, b) => Number(a.isLocked) - Number(b.isLocked))} 
      />
      <Navigation />
    </div>
  );
};

export default Marketplace;
