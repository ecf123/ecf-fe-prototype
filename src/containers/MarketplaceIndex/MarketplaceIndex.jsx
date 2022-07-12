import React from "react";
import MarketplaceIndexOverview from "../../components/MarketplaceIndexOverview/MarketplaceIndexOverview";
import TrophyStats from "../../components/TrophyStats/TrophyStats"

// path: /marketplace/:marketplaceId

const MarketplaceIndex = ({ marketData }) => {
  return (
    <div>
      <TrophyStats />
      <MarketplaceIndexOverview marketData={marketData} />
    </div>
  );
};

export default MarketplaceIndex;
