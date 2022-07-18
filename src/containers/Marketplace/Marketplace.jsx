import React from "react";
import MarketplaceCarousel from "../../components/MarketplaceCarousel/MarketplaceCarousel";
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader";

// path: /marketplace

const Marketplace = ({ userProfile, marketData }) => {
  return (
    <div>
      <TrophyHeader userProfile={userProfile} />
      <MarketplaceCarousel marketData={marketData} />
    </div>
  );
};

export default Marketplace;
