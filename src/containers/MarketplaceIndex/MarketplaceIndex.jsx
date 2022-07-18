import React from "react";
import MarketplaceIndexOverview from "../../components/MarketplaceIndexOverview/MarketplaceIndexOverview";
import MarketplaceIndexRequirements from "../../components/MarketplaceIndexRequirements/MarketplaceIndexRequirements";

// path: /marketplace/:marketplaceId

const MarketplaceIndex = ({ marketData }) => {
  return (
    <div>
      <MarketplaceIndexRequirements marketData={marketData} />
      <MarketplaceIndexOverview marketData={marketData} />
    </div>
  );
};

export default MarketplaceIndex;
